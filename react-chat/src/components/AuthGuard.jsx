import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkOnLogin } from '../service/tokensService';
import { ROUTES } from '../routes';

const AuthGuard = ({ children }) => {
  const [authStatus, setAuthStatus] = useState('init');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      setAuthStatus('loading');
      try {
        await checkOnLogin();
        setAuthStatus('success');
      } catch (error) {
        console.error('Ошибка авторизации:', error);
        setAuthStatus('error');
        navigate(ROUTES.AUTH); 
      } 
    };

    checkAuthStatus();
  }, [navigate]);

  switch (authStatus){
    case 'loading':
      return <div>Загрузка . . .</div>
    case 'success':
      return children
    case 'error':
      return null
    default:
      return null
  }
};

export default AuthGuard;
