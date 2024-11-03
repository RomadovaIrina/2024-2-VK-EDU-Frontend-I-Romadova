import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const saveMessage = async (newMessage) => {
    try {
        await axios.post(`${API_URL}/messages`, newMessage);
    } catch (error) {
        console.error("Error saving message:", error);
    }
};

const getAllMessages = async () => {
    try {
        const response = await axios.get(`${API_URL}/messages`);
        return response.data;
    } catch (error) {
        console.error("Error fetching messages:", error);
        return [];
    }
};

const getMessages = async (chatId) => {
    try {
        const response = await axios.get(`${API_URL}/messages?chatId=${chatId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching messages for chat ID ${chatId}:`, error);
        return [];
    }
};

export { saveMessage, getAllMessages, getMessages };
