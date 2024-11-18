import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkOnLogin } from '../service/tokensService';
import { ROUTES } from '../routes';

const AuthGuard = ({ children }) => {
  const [authStatus, setAuthStatus] = useState('loading');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const isLoggedIn = await checkOnLogin();
        if (isLoggedIn) {
          setAuthStatus('success');
        } else {
          throw new Error('Unauthorized');
          navigate(ROUTES.LOGIN); 
        }
      } catch (error) {
        console.error('Ошибка авторизации:', error);
        setAuthStatus('error');
        navigate(ROUTES.LOGIN); 
      } 
    };

    checkAuthStatus();
  }, [navigate]);

  if (authStatus === 'loading') {
    return <div>Загрузка...</div>;
  }
  else if (authStatus === 'error') {
    return null;
  }
  return children;
};

export default AuthGuard;
