import apiService from "../apiService";
import { getAuthHeaders } from "../auth/auth";

const getChats = async (search = '', pageNum = 1, pageSize = 10) => {
  const headers = getAuthHeaders();
  try {
    const response = await apiService.get('/chats/', {
      headers,
      params: {
        search,
        page: pageNum,
        page_size: pageSize,
      },
    });
    return response.data; // Вернем весь объект ответа, а не только results
  } catch (error) {
    console.error("Failed to load chats:", error.response?.data || error.message);
    return null; // Вернем null, чтобы проверить наличие ошибок при вызове
  }
};


async function saveChat(chatData, config) {
  try {
    const response = await apiService.post('chats/', chatData, config);
    return response.data;
  } catch (error) {
    console.error("Ошибка при создании чата:", error.response?.data || error.message);
    alert("Не удалось создать чат");
    return null;
  }
}

 async function getChatById(chatId) {
  try {
    const response = await apiService.get(`chats/${chatId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching chat with ID ${chatId}:`, error);
    return null;
  }
}


export {getChatById, getChats, saveChat};