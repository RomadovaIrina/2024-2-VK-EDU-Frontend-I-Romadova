import apiService from "../apiService";
import { setTokens, checkOnLogin } from "../tokens/tokenManager";


const getAuthHeaders = () => {
  const token = apiService.accessToken; 
  if (!token) {
    throw new Error("Access token is not defined");
  }
  return { 'Authorization': `Bearer ${token}` };
};
const registerUser = async({ username, password, first_name, last_name, bio, avatar })=> {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('first_name', first_name);
  formData.append('last_name', last_name);
  formData.append('bio', bio);
  if (avatar) formData.append('avatar', avatar);

  try {
    const response = await apiService.post('register/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response ? error.response.data : error.message);
    throw error;
  }
}


const loginUser = async ({ username, password }) => {
  try {
      const response = await apiService.post('auth/', { username, password });
      const { access, refresh } = response.data;
      setTokens({ accessToken: access, refreshToken: refresh });
      return response.data;
  } catch (error) {
      console.error('Login error:', error);
      throw error;
  }
};



const refreshToken = async() =>{
  const refresh = localStorage.getItem('refreshToken');
  if (!refresh) throw new Error('Refresh token not found');
  try {
    const response = await apiService.post('auth/refresh/', { refresh });
    const { access, refresh: newRefresh } = response.data;
    apiService.setAccessToken(access);
    localStorage.setItem('refreshToken', newRefresh);
    return response.data;
  } catch (error) {
    console.error('Token refresh error:', error);
    throw error;
  }
}


export { getAuthHeaders, loginUser, refreshToken, registerUser };