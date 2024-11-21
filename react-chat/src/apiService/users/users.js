  import apiService from "../apiService";
 
const getUserApi = async(userId)=> {
  const response = await apiService.get(`user/${userId}/`);
  return response.data; };
  

const saveUserApi = async(userId, userData)=>{
  await apiService.put(`users/${userId}/`, userData);
};

  const getCurrentUserApi = async() => {
    const response = await apiService.get('user/current/');
    return response.data;
  };
  

  const updateUserApi = async (formData) => {
    const response = await apiService.patch('user/current/', formData);
    return response.data;
  };
  
const getUserByUsernameApi = async (username) => {
  const response = await apiService.get(`users/`, {
    params: { search: username },
  });
  return response.data.results;
};


const getUsersApi = async ({ search = "", page = 1, page_size = 10 } = {}) => {
  const response = await apiService.get('users/', {
    params: { search, page, page_size },
  });
  return response.data;
};


  export {saveUserApi, getUserApi, getUsersApi, getCurrentUserApi, updateUserApi, getUserByUsernameApi};