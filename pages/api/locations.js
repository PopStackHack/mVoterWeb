import { response } from 'express';
import MaePaySohAPI from '../../gateway/api';

export default async function (req, res) {
  try {
    const {
      type = 'state_regions',
      state_region,
      township,
      ward,
    } = req.query;

    const api = new MaePaySohAPI(req.cookies.token);

    let result;

    if (type === 'state_regions') {
      const response = await api.getStateRegions();
      result = response.data.data; // ¯\_(ツ)_/¯
    } else if (type === 'townships') {
      const response = await api.getTownships(state_region);
      result = response.data.data; // ¯\_(ツ)_/¯
    } else if (type === 'wards') {
      const response = await api.getWards(state_region, township);
      result = response.data.data; // ¯\_(ツ)_/¯
    } else if (type === 'details') {
      const response = await api.getWardDetails(state_region, township, ward);
      result = response.data.data;
    } else {
      throw new Error('Location type not provided.');
    }

    return res.status(200).send({ data: result });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
}