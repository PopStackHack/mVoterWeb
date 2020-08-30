import { createContext, useContext, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const {
    children,
  } = props;

  useEffect(() => {
      const appToken = window.localStorage.getItem('token');
      // TODO: Handle invalid logic
      if (!appToken) {
        // Call SSR
        fetch('/api/auth')
          .then((response) => response.json())
          .then((result) => window.localStorage.setItem('token', result.token))
          .catch(console.error);
      }
  }, []);

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
