import axios from 'axios';
import nookies from 'nookies';
import { signToken } from '../../utils/authClient';
import { serializedCookie } from '../../utils/authClient';

const jwtKey = process.env.JWT_KEY;

const authAPI = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'api-key': process.env.API_KEY,
  },
});

export async function fetchToken(context) {
  // This is rather a side effect
  const response = await authAPI.post('/authenticate');
  const { token: apiToken } = response.data;
  // Sign JWT from here
  const token = signToken(apiToken);

  return token;
}

export default async function auth(req, res) {
  try {
    const token = await fetchToken();
    // Set token inside HTTP Cookie so we can deal with SSR endpoints
    return res.status(200).send({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
};