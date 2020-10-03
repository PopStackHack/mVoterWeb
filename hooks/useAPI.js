import axios from 'axios';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthProvider';

function useAPI() {
  const { updateToken } = useAuthContext();
  const [loading, setLoading] = useState(false);

  async function fetchData(url, query) {
    try {
      setLoading(true);

      const { data } = await axios.get(url, {
        params: { ...query },
        withCredentials: true
      });

      // This is where we handle custom token
      if (data.token) {
        updateToken(data.token);
      }

      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      return error;
    }
  }

  return [loading, fetchData];
}

export default useAPI;
