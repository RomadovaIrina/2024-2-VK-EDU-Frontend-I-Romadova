import apiService from "../apiService";
import { getAccessToken } from "../tokens/tokenManager";


const saveMessageApi = async (messageData) => {
  try {
    const response = await apiService.post('messages/', messageData);
    return response.data;
  } catch (error) {
    console.error("Ошибка при сохранении сообщения:", error.response?.data || error.message);
    throw error;
  }
};


const getAllMessagesApi = async()=> {
  try {
    const response = await apiService.get('messages');
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}

const getMessagesApi = async ({ chatId, page = 1, page_size = 20 } = {}) => {
  try {
    const response = await apiService.get('messages/', {
      params: {
        chat: chatId,
        page,
        page_size,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching messages for chat ID ${chatId}:`, error.response?.data || error.message);
    throw error;
  }
};


export { getAllMessagesApi, saveMessageApi, getMessagesApi };