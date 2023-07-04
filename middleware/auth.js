/*const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, process.env.JWT_SENHA, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }

    req.user = {
      clienteId: decoded.clienteId
    };
    next();
  });
};

module.exports = authenticateToken;*/

const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader)
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  jwt.verify(authHeader, process.env.JWT_SENHA, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }

    req.token = authHeader; // Armazena o token no objeto de solicitação (req)
    req.user = {
      clienteId: decoded.clienteId
    };
    next();
  });
};

module.exports = auth;
