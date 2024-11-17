import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { loginUser, registerUser } from '../../../apiService/auth/auth';
import { ROUTES } from '../../../routes';
const AuthPage = ({ isRegistering }) => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      await loginUser(credentials);
      navigate(ROUTES.ROOT);
    } catch (error) {
      alert('Ошибка при авторизации. Ошибка логина или пароля.');
    }
  };

  const handleRegister = async (formData) => {
    try {
      await registerUser(formData);
      alert('Регистрация успешна! Войдите в систему.');
      navigate(ROUTES.LOGIN);
    } catch (error) {
      alert('Ошибка при регистрации. Проверьте данные.');
    }
  };

  return isRegistering ? (
    <RegisterForm onRegister={handleRegister} />
  ) : (
    <LoginForm onLogin={handleLogin} />
  );
};

export default AuthPage;

