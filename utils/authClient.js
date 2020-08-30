import cookie from 'cookie';

export const MPS_COOKIE_SECRET = process.env.COOKIE_SECRET;

export const serializedCookie = (userSecret) => {
  return cookie.serialize(process.env.COOKIE_SECRET, userSecret, {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 864000,
    httpOnly: true,
    path: '/',
  });
}
