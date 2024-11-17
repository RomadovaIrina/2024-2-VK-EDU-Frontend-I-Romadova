import apiService from "../apiService";
import { getAccessToken } from "../tokens/tokenManager";


const saveMessage = async (messageData) => {
  try {
      const response = await apiService.post(`messages/`, messageData);
      return response.data;
  } catch (error) {
      console.error("Ошибка при сохранении сообщения:", error);
      throw error;
  }
};

const getAllMessages = async()=> {
  try {
    const response = await apiService.get('messages');
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}

const getMessages = async(chatId, page = 1, pageSize = 20) =>{
  try {
    const response = await apiService.get('messages/', {
      params: {
        chat: chatId,
        page_size: pageSize,
        page: page
      }
    });
    const sortedMessages = response.data.results.sort((a, b) => 
      new Date(a.created_at) - new Date(b.created_at)
    );
    return { ...response.data, results: sortedMessages };
  } catch (error) {
    console.error(`Error fetching messages for chat ID ${chatId}:`, error.response?.data || error.message);
    return { results: [] };
  }
}


export { getAllMessages, saveMessage, getMessages };