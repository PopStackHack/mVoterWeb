import MaePaySohAPI from '../../gateway/api';

export default async function(req, res) {
  try {
    const { category = 'normal' } = req.query;

    const api = new MaePaySohAPI(req.cookies.token);

    const response = await api.getBallots(category);

    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}
