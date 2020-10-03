import MaePaySohAPI from '../../gateway/api';

export default async function(req, res) {
  try {
    const { page, category } = req.query;

    const api = new MaePaySohAPI(req.cookies.token);
    const response = await api.getFaqs({ page, category });

    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}
