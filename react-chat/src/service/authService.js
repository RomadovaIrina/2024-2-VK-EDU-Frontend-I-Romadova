import { registerUser, loginUser, refreshToken } from "../apiService/auth/auth";
import { setTokens } from "../apiService/tokens/tokenManager";

const registerUserProcess = async({ username, password, first_name, last_name, bio, avatar })=> {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('first_name', first_name);
  formData.append('last_name', last_name);
  formData.append('bio', bio);
  if (avatar) formData.append('avatar', avatar);
  return await registerUser(formData);
}


const loginUserProcess = async ({ username, password }) => {
    const data = await loginUser({ username, password });
    const { access, refresh } = data;
    setTokens({ accessToken: access, refreshToken: refresh });
    return data;
  };
  
  const refreshTokenProcess = async () => {
    const refresh = localStorage.getItem('refreshToken');
    if (!refresh) 
        throw new Error('Refresh token not found');
    const data = await refreshToken(refresh);
    const { access, refresh: newRefresh } = data;
    setTokens({ accessToken: access, refreshToken: newRefresh });
    return data;
  };
  
  export { registerUserProcess, loginUserProcess, refreshTokenProcess };