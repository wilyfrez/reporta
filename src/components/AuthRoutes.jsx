import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { AuthService } from '../services';

const AuthRoutes = ({ children }) => {
  const { currentUser } = useStateContext();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  useEffect(() => {
    const LoginWithToken = async () => {
      const response = await AuthService.loginWithToken();
      if (!response.status) {
        console.log(response);

        return <Navigate to="/login" state={{ path: location.pathname }} />;
      }
    };

    LoginWithToken();
  }, []);

  return children;
};

export default AuthRoutes;
