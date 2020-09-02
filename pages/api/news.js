import { fetchToken } from './auth';
import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      page,
    } = req.query;
    const token = await fetchToken(req);

    // This is very hacky approach
    if (!token) {
      return res.status(500).send({ error: 'No secret token provided.' })
    }
    const api = new MaePaySohAPI(token);

    const response = await api.getNews({ page });
    const { data, pagination } = response.data;

    return res.status(200).send({ data, pagination });
  } catch (error) {
    console.error(error);
  }
}