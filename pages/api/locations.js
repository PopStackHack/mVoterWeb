import MaePaySohAPI from '../../gateway/api';

// eslint-disable-next-line func-names
export default async function(req, res) {
  try {
    const { type = 'state_regions', state_region, township, ward } = req.query;

    const api = new MaePaySohAPI(req.cookies.token);
    let response;

    if (type === 'state_regions') {
      response = await api.getStateRegions();
    } else if (type === 'townships') {
      response = await api.getTownships(state_region);
    } else if (type === 'wards') {
      response = await api.getWards(state_region, township);
    } else if (type === 'details') {
      response = await api.getWardDetails(state_region, township, ward);
    } else {
      throw new Error('Location type not provided.');
    }

    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}
