import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { refreshToken } from '../apiService/auth/auth';

const AuthGuard = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const refToken = localStorage.getItem('refreshToken');
      if (refToken) {
        try {
          await refreshToken();
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Ошибка обновления токена:', error);
          localStorage.removeItem('refreshToken'); 
          setIsLoggedIn(false);
          navigate('/auth'); 
        }
      } else {
        setIsLoggedIn(false);
        navigate('/auth');
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, [navigate]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return isLoggedIn ? children : null;
};

export default AuthGuard;
