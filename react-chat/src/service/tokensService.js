import { setTokens, getAccessToken, getRefreshToken, removeTokens, refreshTokenApi} from "../apiService/tokens/tokenManager.js";



const refreshOnRequest = async () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if (accessToken) {
    return accessToken;
  }

  if (!refreshToken) {
    removeTokens();
    throw new Error('Tokens are expired. Log in again.');
  }

  try {
    const { access, refresh } = await refreshTokenApi(refreshToken);
    setTokens({ accessToken: access, refreshToken: refresh });
    return access;
  } catch (error) {
    window.location.href('/login');
    throw error;
  }
};

const checkOnLogin = async () => {
  const accessToken = await refreshOnRequest();
  if (!accessToken) {
    throw new Error('User is not logged in.');
  }
  return accessToken;
};

export { refreshOnRequest, checkOnLogin };
