import { createContext, useContext, useEffect } from 'react';
import { fetchToken } from '../pages/api/auth';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const {
    children,
  } = props;

  useEffect(() => {
    // TODO: Handle invalid logic
  }, []);

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
