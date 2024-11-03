import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';
let accessToken = '';

export const setAccessToken = (token) => {
  accessToken = token;
};

const getAuthHeaders = () => ({
  'Authorization': `Bearer ${accessToken}`,
});

export async function registerUser({ username, password, first_name, last_name, bio, avatar }) {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('first_name', first_name);
  formData.append('last_name', last_name);
  formData.append('bio', bio);
  if (avatar) formData.append('avatar', avatar);

  try {
    const response = await axios.post(`${API_BASE_URL}/register/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    throw error;
  }
}

export async function loginUser({ username, password }) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/`,
      { username, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    const { access, refresh } = response.data;
    setAccessToken(access);
    localStorage.setItem('refreshToken', refresh);
    return response.data;
  } catch (error) {
    console.error('Ошибка входа:', error);
    throw error;
  }
}

export async function refreshToken() {
  const refresh = localStorage.getItem('refreshToken');
  if (!refresh) {
    throw new Error('Токен обновления не найден');
  }
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/refresh/`,
      { refresh },
      { headers: { 'Content-Type': 'application/json' } }
    );
    const { access, refresh: newRefresh } = response.data;
    setAccessToken(access);
    localStorage.setItem('refreshToken', newRefresh);
    return response.data;
  } catch (error) {
    console.error('Ошибка обновления токена:', error);
    throw error;
  }
}


export {getAuthHeaders};