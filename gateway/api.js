import axios from 'axios';
import {
  signToken,
  decodeToken,
} from '../utils/authClient';

import { fetchToken } from '../pages/api/auth';

class MaePaySohAPI {
  constructor(token) {
    const axiosInstance = axios.create({
      baseURL: process.env.BASE_URL,
      timeout: 10000,
    });

    axiosInstance.interceptors.request.use(
      async (config) => {

        if (token) {
          config.headers['api-token'] = token;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      }, async function (error) {

        if (error.response.status !== 401) {
          return Promise.reject(error);
        }

        const config = error.config;


        if (error.response.status === 401 && !error.response.retry) { // Token key not authorized for use
          const apiToken = await fetchToken(); // This is signed
          config.headers['api-token'] = apiToken;

          const response = await axios.request(config);

          response.retry = true;
          response.data.token = apiToken;

          return Promise.resolve(response);
        }
        return Promise.reject(error);
      }
    );

    this.api = axiosInstance;
  }

  getConstituencies(query) {
    return this.api.get('/constituencies', {
      params: {
        query,
      },
    })
  }

  getCandidateList(constituencyId) {
    return this.api.get('/candidates', {
      params: {
        constituency_id: constituencyId,
      },
    })
      .catch(console.error);
  }

  searchCandidates({ query, page = 1, item_per_page }) {
    return this.api.get('/candidates', {
      params: {
        query,
        page,
        item_per_page,
      },
    })
      .catch(console.error);
  }

  getCandidateById(id) {
    return this.api.get(`/candidates/${id}`)
      .catch(console.error);
  }

  getBallots() {
    return this.api.get('/ballots')
      .catch(console.error);
  }

  getFaqs({
    page,
    name,
    category,
  }) {
    return this.api.get('/faqs', {
      params: {
        page,
        name,
        category,
      }
    })
      .catch(console.error);
  }

  getFaqById(id) {
    return this.api.get(`/faqs/${id}`)
      .catch(console.error);
  }

  searchFaqs({ query, page = 1, item_per_page }) {
    return this.api.get('/faqs', {
      params: {
        query,
        page,
      },
    });
  }

  getStateRegions() {
    return this.api.get('/locality/state_regions')
      .catch(console.error);
  }

  getTownships(stateRegion) {
    return this.api.get('/locality/townships', {
      params: {
        state_region: stateRegion,
      }
    })
      .catch(console.error);
  }

  getWards(stateRegion, township) {
    return this.api.get('/locality/wards', {
      params: {
        state_region: stateRegion,
        township,
      }
    })
      .catch(console.error);
  }

  getWardDetails(stateRegion, township, ward) {
    return this.api.get('/locality/details', {
      params: {
        state_region: stateRegion,
        township,
        ward,
      }
    })
      .catch(console.error);
  }

  getNews({
      page,
      itemPerPage = 10,
  }) {
    return this.api.get('/news', {
      params: {
        page,
        item_per_page: itemPerPage,
      }
    })
      .catch(console.error);
  }

  searchNews({ query, page = 1, item_per_page }) {
    return this.api.get('/news', {
      params: {
        query,
        page,
      },
    });
  }

  getParties({
    page,
    item_per_page,
  }) {
    return this.api.get('/parties', {
      params: {
        page,
        item_per_page,
      },
    });
  }

  getPartyById(id) {
    return this.api.get(`/parties/${id}`)
      .catch(console.error);
  }

  searchParties({ query, page = 1, item_per_page }) {
    return this.api.get('/parties', {
      params: {
        query,
        page,
        item_per_page,
      },
    });
  }

  getBallots(category = 'normal') {
    return this.api.get(`ballots`, {
      params: {
        category,
      },
    })
      .catch(console.error);
  }
}

module.exports = MaePaySohAPI;
