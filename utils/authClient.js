import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_KEY;

function signToken (tokenToSign) {
  return jwt.sign(tokenToSign, jwtSecret, { algorithm: 'HS256' });
}

async function decodeToken (jwtToken) {
  const decoded = await jwt.verify(jwtToken, jwtSecret, { algorithms: ['HS256'] });
  return decoded;
}

module.exports = {
  signToken,
  decodeToken,
};
