import axios from 'axios';
import cookie from 'cookie';
import { serializedCookie } from '../../utils/authClient';

const authAPI = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'api-key': process.env.API_KEY,
  },
});

export default async function auth(req, res) {
  try {
    // If there is cached cookie, we should not attempt to call it again
    if (req.headers.cookies) {
      return req.headers.cookies;
    }

    const response = await authAPI.post('/authenticate');
    const { token } = response.data;

    // Set token inside HTTP Cookie so we can deal with SSR endpoints
    res.setHeader('Set-Cookie', serializedCookie(token));
    return res.status(200).send({ token });
  } catch (error) {
    console.error(error);
  }
};