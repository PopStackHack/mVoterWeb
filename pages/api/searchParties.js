import { fetchToken } from './auth';
import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      query,
      page,
      item_per_page = 25,
    } = req.query;

    const token = await fetchToken(req);

    if (!token) {
      return res.status(500).send({ error: 'No secret token provided.' })
    }

    const api = new MaePaySohAPI(token);

    const response = await api.searchParties({ query, page, item_per_page });
    const { data } = response.data;

    return res.status(200).send({ data });
  } catch (error) {
    console.error(error);
  }
}