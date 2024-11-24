import { saveUserApi, getUserApi, getUsersApi, getCurrentUserApi, updateUserApi, getUserByUsernameApi } from "../apiService/users/users.js";


const prepareFormData = (userData) => {
    const formData = new FormData();
    formData.append("first_name", userData.first_name);
    formData.append("last_name", userData.last_name);
    formData.append("username", userData.username);
    formData.append("bio", userData.bio);
    if (userData.avatar instanceof File) {
        formData.append("avatar", userData.avatar);
    }
    return formData;
};


const getUser = async (userId) => {
    try {
        return await getUserApi(userId);
    } catch (error) {
        console.error(`Error fetching user with ID ${userId}:`, error.message);
        return null;
    }
};


const saveUser = async (userId, userData) => {
    try {
        await saveUserApi(userId, userData);
        console.log("User successfully saved.");
    } catch (error) {
        console.error(`Error saving user with ID ${userId}:`, error.message);
    }
};


const getCurrentUser = async () => {
    try {
        return await getCurrentUserApi();
    } catch (error) {
        console.error("Error fetching current user:", error.message);
        return null;
    }
};


const updateUser = async (userData) => {
    try {
        const formData = prepareFormData(userData);
        return await updateUserApi(formData);
    } catch (error) {
        console.error("Error updating user:", error.message);
        throw error;
    }
};

const getUserByUsername = async (username) => {
    try {
        const users = await getUserByUsernameApi(username);
        return users.find((user) => user.username === username) || null;
    } catch (error) {
        console.error("Error fetching user by username:", error.message);
        return null;
    }
};


const getUsers = async (filters = {}) => {
    try {
        return await getUsersApi(filters);
    } catch (error) {
        console.error("Error fetching users:", error.message);
        return null;
    }
};

export { getUser, saveUser, getCurrentUser, updateUser, getUserByUsername, getUsers };
