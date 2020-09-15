import { fetchToken } from './auth';
import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      constituency_id: constituencyId,
    } = req.query;

    const token = await fetchToken(req);

    if (!token) {
      return res.status(500).send({ error: 'No secret token provided.' })
    }

    const api = new MaePaySohAPI(token);

    const response = await api.getCandidateList(constituencyId);
    const { data } = response.data;

    return res.status(200).send({
      // pre-sort the data here before Frontend
      data: data
        .sort((a, b) => a.attributes.ballot_order - b.attributes.ballot_order),
    });
  } catch (error) {
    console.error(error);
  }
}