import axios from 'axios';
import nookies from 'nookies';

const authAPI = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'api-key': process.env.API_KEY,
  },
});

export async function fetchToken() {
  // This is rather a side effect
  const response = await authAPI.post('/authenticate');
  const { token: apiToken } = response.data;
  return apiToken;
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