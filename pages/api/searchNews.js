import { fetchToken } from './auth';
import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      query,
      page,
      item_per_page = 25,
    } = req.query;

    const api = new MaePaySohAPI(req.cookies.token);
    const response = await api.searchNews({ query, page, item_per_page });
    const { data } = response.data;

    return res.status(200).send({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
}
