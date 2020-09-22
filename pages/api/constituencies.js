import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      query,
    } = req.query;

    const api = new MaePaySohAPI(req.cookies.token);

    const response = await api.getConstituencies(query);

    return res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
}

