import axios from 'axios';
import nookies from 'nookies';
import { serializedCookie } from '../../utils/authClient';

const authAPI = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'api-key': process.env.API_KEY,
  },
});

export async function fetchToken(context) {
  // This is rather a side effect
  const cookies = nookies.get(context);

  if (cookies && cookies.token) {
    return cookies.token;
  }

  const response = await authAPI.post('/authenticate');
  const { token } = response.data;

  nookies.set(context, 'token', token);

  return token;
}

export default async function auth(req, res) {
  try {
    const token = await fetchToken();
    // Set token inside HTTP Cookie so we can deal with SSR endpoints
    return res.status(200).send({ token });
  } catch (error) {
    console.error(error);
  }
};