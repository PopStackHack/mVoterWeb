import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      constituency_id: constituencyId,
    } = req.query;

    const api = new MaePaySohAPI(req.cookies.token);
    const response = await api.getCandidateList(constituencyId);
    const { data } = response.data;

    return res.status(200).send({
      // pre-sort the data here before Frontend
      token: response.data.token,
      data: data
        .sort((a, b) => a.attributes.ballot_order - b.attributes.ballot_order),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
}