 import apiService from "../apiService";
 
 async function getUser(userId) {
    try {
      const response = await apiService.get(`users/${userId}`);
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


  export {initUsers, saveUser, getUser};