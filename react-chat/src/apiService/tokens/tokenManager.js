import apiService from "../apiService";
import { refreshToken } from "../auth/auth";

const setTokens = ({ accessToken, refreshToken }) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
};

const getAccessToken = () => localStorage.getItem('accessToken');
const getRefreshToken = () => localStorage.getItem('refreshToken');

const removeTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}

const refreshTokenApi = async (refreshToken) => {
    try {
      const response = await apiService.post('auth/refresh/', { refresh: refreshToken });
      return response.data;
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  };

  export { setTokens, getAccessToken, getRefreshToken, removeTokens, refreshTokenApi };