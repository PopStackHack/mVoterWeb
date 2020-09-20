import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      page,
      category,
    } = req.query;

    const api = new MaePaySohAPI(req.cookies.token);
    const response = await api.getFaqs({ page, category });
    const { data, pagination } = response.data;

    return res.status(200).send({ data, pagination });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
}
