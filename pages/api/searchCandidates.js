import MaePaySohAPI from '../../gateway/api';

export default async function(req, res) {
  try {
    const { query, page, item_per_page = 25 } = req.query;

    const api = new MaePaySohAPI(req.cookies.token);

    const response = await api.searchCandidates({ query, page, item_per_page });

    return res.status(200).send(response.data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).send('Internal server error');
  }
}
