import axios from 'axios';
import nookies, { parseCookies } from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  token: null,
  updateToken: () => {}
});

export function useAuthContext() {
  return useContext(AuthContext);
}

const AuthProvider = props => {
  const { children } = props;

  const [token, setToken] = useState(null);

  useEffect(() => {
    // TODO: Handle invalid logic
    async function fetchToken() {
      // Check token first
      const cookies = parseCookies();

      if (cookies.token) {
        setToken(cookies.token);
        return;
      }

      const {
        data: { token: apiToken }
      } = await axios.get('/api/auth', {
        method: 'POST'
      });

      nookies.set(null, 'token', apiToken, {
        path: '/'
      });

      if (apiToken) {
        setToken(apiToken);
      }
    }

    fetchToken();
  }, []);

  function updateToken(apiToken) {
    nookies.set(null, 'token', apiToken, {
      path: '/'
    });
    setToken(apiToken);
  }

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
