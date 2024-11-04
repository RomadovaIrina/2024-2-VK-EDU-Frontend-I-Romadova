import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { refreshToken } from '../apiService/auth/auth';

const AuthGuard = ({ param }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkStatus = async () => {
            const refToken = localStorage.getItem('refreshToken');
            if (refToken) {
                try {
                    await refreshToken();
                    setIsLoggedIn(true);
                }
                catch (error) {
                    console.error('Ошибка обноваления', error);
                    setIsLoggedIn(false);
                }
            } else {
                setIsLoggedIn(false);
            }
            setIsLoading(false);
        };
        checkStatus();
    }, []);

    useEffect(() => {
        if (!isLoading && !isLoggedIn) {
            navigate('/auth');
        }
    }, [isLoading, isLoggedIn, navigate]);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    return isLoggedIn ? param : null;
};

export default AuthGuard;
