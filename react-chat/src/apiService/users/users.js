 import apiService from "../apiService";
 
 async function getUser(userId) {
    try {
      const response = await apiService.get(`user/${userId}/`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      return null;
    }
  }
  

   async function saveUser(userId, userData) {
    try {
      await apiService.put(`users/${userId}`, userData);
    } catch (error) {
      console.error(`Error saving user with ID ${userId}:`, error);
    }
  }
  

   async function initUsers(users) {
    try {
      await apiService.post('users/init', users);
    } catch (error) {
      console.error("Error initializing users:", error);
    }
  }


  const getCurrentUser = async() =>{
    try{
        const response = await apiService.get('user/current/');
        return response.data;
    } catch(error){
        console.error('Error fetching user:', error);
        throw error;
    }
  };

  const updateUser = async (newData) => {
    try {
        const formData = new FormData();
        formData.append("first_name", newData.first_name);
        formData.append("last_name", newData.last_name);
        formData.append("username", newData.username);
        formData.append("bio", newData.bio);
        if (newData.avatar instanceof File) {
            formData.append("avatar", newData.avatar);
        }
        const response = await apiService.patch('user/current/', formData, {});
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error.response ? error.response.data : error.message);
        throw error;
    }
};

const getUserByUsername = async (username) => {
  try {
    const response = await apiService.get(`users/?search=${username}`);
    const users = response.data.results;
    const exactUser = users.find(user => user.username === username);
    return exactUser || null;
  } catch (error) {
    console.error("Error fetching user by username:", error);
    return null;
  }
};


  export {initUsers, saveUser, getUser, getCurrentUser, updateUser, getUserByUsername};