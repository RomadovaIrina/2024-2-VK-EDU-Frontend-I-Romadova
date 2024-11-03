import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const getUser = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user with ID ${userId}:`, error);
        return null;
    }
};

const saveUser = async (userId, userData) => {
    try {
        await axios.put(`${API_URL}/users/${userId}`, userData);
    } catch (error) {
        console.error(`Error saving user with ID ${userId}:`, error);
    }
};

const initUsers = async (users) => {
    try {
        await axios.post(`${API_URL}/users/init`, users);
    } catch (error) {
        console.error("Error initializing users:", error);
    }
};

export { getUser, saveUser, initUsers };
