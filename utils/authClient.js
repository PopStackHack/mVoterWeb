import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_KEY;

async function signToken (tokenToSign) {
  const signedToken = jwt.sign({ token: tokenToSign }, jwtSecret, { algorithm: 'HS256' });
  return signedToken;
}

async function decodeToken (jwtToken) {
  try {
    const decoded = await jwt.verify(jwtToken, jwtSecret, { algorithms: ['HS256'] });
    return decoded;
  } catch (error) {
    console.error('DECODING ERROR => ', error);
  }
}

module.exports = {
  signToken,
  decodeToken,
};
