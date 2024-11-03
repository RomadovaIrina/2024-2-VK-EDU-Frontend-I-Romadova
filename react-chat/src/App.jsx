import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import ChatList from './components/pages/ChatList/ChatList';
import ChatPage from './components/pages/ChatPage/ChatPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';

import TempLogin from './components/TempLogin';
import TempRegister from './components/TempRegister';
import { loginUser, refreshToken, registerUser } from './api_service/auth/auth';

const ROUTES = {
  ROOT: "/",
  CHAT: "/chat/:chatId",
  PROFILE: "/profile/:userId",
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const refresh = localStorage.getItem('refreshToken');
      if (refresh) {
        try {
          await refreshToken();
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Token refresh failed', error);
        }
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async (credentials) => {
    try {
      await loginUser(credentials);
      setIsLoggedIn(true);
    } catch (error) {
      alert("Ошибка при авторизации");
    }
  };

  const handleRegister = async (formData) => {
    try {
      await registerUser(formData);
      setIsRegistering(false);
      alert("Регистрация успешна. Пожалуйста, войдите.");
    } catch (error) {
      alert("Ошибка при регистрации");
    }
  };

  return (
    <Router>
      <div className={styles.content}>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path={ROUTES.ROOT} element={<ChatList />} />
              <Route path={ROUTES.CHAT} element={<ChatPage />} />
              <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            </>
          ) : (
            <>
              <Route
                path={ROUTES.ROOT}
                element={
                  isRegistering ? (
                    <TempRegister onRegister={handleRegister} />
                  ) : (
                    <TempLogin onLogin={handleLogin} />
                  )
                }
              />
            </>
          )}
        </Routes>
        {!isLoggedIn && (
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
          </button>
        )}
      </div>
    </Router>
  );
}


export default App;
