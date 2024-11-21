import apiService from "../apiService";
import { getRefreshToken } from "../tokens/tokenManager";
import { setTokens } from "../tokens/tokenManager";


const registerUser = async(formData)=> {
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


const loginUser = async (credentials) => {
  try {
      const response = await apiService.post('auth/', credentials);
      return response.data;
  } catch (error) {
      console.error('Login error:', error);
      throw error;
  }
};



const refreshToken = async(refresh) =>{
  

  if (!refresh) throw new Error('Refresh token not found');
  try {
    const response = await apiService.post('auth/refresh/', { refresh });
    return response.data;
  } catch (error) {
    console.error('Token refresh error:', error);
    throw error;
  }
}

const refreshAccessToken = async () => {
  try {
      const response = await apiService.post('/auth/refresh/', {
          refresh_token: getRefreshToken(), 
      });
      const { access_token, refresh_token } = response.data;
      setTokens(access_token, refresh_token);
      return access_token;
  } catch (error) {
      console.error("Ошибка обновления токена:", error.response?.data || error.message);
      return null;
  }
};


export { loginUser, refreshToken, registerUser, refreshAccessToken };