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

const isValid = (token) => {
    if (!token){
        return false;
    }
    return true
}

const refreshOnRequest = async () => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    if (accessToken) {
        return accessToken;
    }
    if (!refreshToken) {
        removeTokens();
        throw new Error('Tokens are expired. log in again');
    }


    try {
        const response = await apiService.post('auth/refresh/', { refresh: refreshToken });
        const { access, refresh } = response.data;
        setTokens({ accessToken: access, refreshToken: refresh });
        return access;
    } catch (error) {
        console.error('Error refreshing token:', error);
        removeTokens();
        throw error;
    }

};


const checkOnLogin = async () => {
    const accessToken = await refreshOnRequest();
    if(!accessToken){
        throw new Error ('User is not logged in');
    }
    return accessToken;
}

export {checkOnLogin, refreshOnRequest, getAccessToken, getRefreshToken, setTokens, removeTokens};