import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUserProcess } from "../../../service/authService";
import { ROUTES } from "../../../routes";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUserProcess({ username, password });
      navigate(ROUTES.ROOT);
    } catch (error) {
      alert("Ошибка при авторизации. Проверьте логин или пароль.");
    }
  };

const handlePassword =(e) =>{
    setPassword(e.target.value)
};

const handleUname = (e) => {
    setUsername(e.target.value)
};

  return (
    <div>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={handleUname}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Войти</button>
      </form>
      <p>
        Нет аккаунта? <Link to={ROUTES.REGISTER}>Зарегистрироваться</Link>
      </p>
    </div>
  );
};

export default LoginPage;
