import { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';

import styles from './App.module.scss';
import ChatList from './components/pages/ChatList/ChatList';
import ChatPage from './components/pages/ChatPage/ChatPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import AuthGuard from './components/AuthGuard';

import TempLogin from './components/TempLogin';
import TempRegister from './components/TempRegister';
import { loginUser, registerUser } from './apiService/auth/auth';

const ROUTES = {
  ROOT: "/",
  CHAT: "/chat/:chatId",
  PROFILE: "/profile",
  AUTH: "/auth",
};

const TempAuth = ({ isRegistering, onRegister, toggleRegister }) => {
  const navigate = useNavigate();
  const handleLogin = async (credentials) => {
    try {
      await loginUser(credentials);
      navigate(ROUTES.ROOT);
    } catch (error) {
      alert("Ошибка при авторизации");
    }
  };
  return (
  <div>
    {isRegistering ? (
      <TempRegister onRegister={onRegister} />
    ) : (
      <TempLogin onLogin={handleLogin} />
    )}
    <button onClick={toggleRegister}>
      {isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
    </button>
  </div>
  )
};

function App() {
  const [isRegistering, setIsRegistering] = useState(false);


  const handleLogin = async (credentials, navigate) => {
    try {
      await loginUser(credentials);
      navigate(ROUTES.ROOT);
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

  const toggleRegister = () => setIsRegistering(!isRegistering);

  return (
    <Router>
      <div className={styles.content}>
        <Routes>
          <Route
            path={ROUTES.AUTH}
            element={
              <TempAuth
                isRegistering={isRegistering}
                onLogin={handleLogin}
                onRegister={handleRegister}
                toggleRegister={toggleRegister}
              />
            }
          />
          <Route
            path={ROUTES.ROOT}
            element={
              <AuthGuard>
                <ChatList />
              </AuthGuard>
            }
          />
          <Route
            path={ROUTES.PROFILE}
            element={
              <AuthGuard>
                <ProfilePage />
              </AuthGuard>
            }
          />
          <Route
            path={ROUTES.CHAT}
            element={
              <AuthGuard>
                <ChatPage />
              </AuthGuard>
            }
          />
          <Route path="*" element={<Navigate to={ROUTES.AUTH} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
