import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      category = 'normal',
    } = req.query;

    const api = new MaePaySohAPI(req.cookies.token);

    const response = await api.getBallots(category);
    const { data } = response.data;

    return res.status(200).send({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
}