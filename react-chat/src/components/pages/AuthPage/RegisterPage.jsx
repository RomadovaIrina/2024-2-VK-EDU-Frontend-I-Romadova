import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUserProcess } from "../../../service/authService";
import { ROUTES } from "../../../routes";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      password,
      first_name: firstName,
      last_name: lastName,
      bio,
      avatar,
    };
    try {
      await registerUserProcess(formData);
      alert("Регистрация успешна! Войдите в систему.");
      navigate(ROUTES.LOGIN);
    } catch (error) {
      alert("Ошибка при регистрации. Проверьте введенные данные.");
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Имя"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Фамилия"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <textarea
          placeholder="О себе"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <p>
        Уже есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
