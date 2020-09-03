import { fetchToken } from './auth';
import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      type = 'state_regions',
      search_str,
    } = req.query;

    const token = await fetchToken(req);

    // This is very hacky approach
    if (!token) {
      return res.status(500).send({ error: 'No secret token provided.' })
    }
    const api = new MaePaySohAPI(token);

    let result;

    if (type === 'state_regions') {
      const response = await api.getStateRegions();
      result = response.data.data; // ¯\_(ツ)_/¯
    } else if (type === 'townships') {
      const response = await api.getTownships(search_str);
      result = response.data.data; // ¯\_(ツ)_/¯
    } else if (type === 'wards') {
      const response = await api.getWards(search_str);
      result = response.data.data; // ¯\_(ツ)_/¯
    } else {
      throw new Error('Location type not provided.');
    }

    return res.status(200).send({ data: result });
  } catch (error) {
    console.error(error);
  }
}