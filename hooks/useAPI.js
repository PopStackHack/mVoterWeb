import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthProvider';

function useAPI() {
  const { token, updateToken } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function fetchData(url, query) {
    try {
      setLoading(true);

      const { data } = await axios.get(url, {
        params: { ...query },
        withCredentials: true,
      });

      // This is where we handle custom token
      if (data.token) {
        updateToken(data.token);
      }

      setLoading(false);
      return data;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return [loading, fetchData];
}

export default useAPI;