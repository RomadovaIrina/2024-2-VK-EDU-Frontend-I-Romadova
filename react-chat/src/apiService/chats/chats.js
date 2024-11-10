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
    return response.data; 
  } catch (error) {
    console.error("Failed to load chats:", error.response?.data || error.message);
    return null; 
  }
};


const saveChat = async(chatData, config) => {
  try {
    const response = await apiService.post('chats/', chatData, config);
    return response.data;
  } catch (error) {
    console.error("Ошибка при создании чата:", error.response?.data || error.message);
    alert("Не удалось создать чат");
    return null;
  }
}
const  getChatById = async(chatId)=> {
  console.log("Fetching chat with ID:", chatId); 
  try {
    const response = await apiService.get(`chat/${chatId}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`Chat with ID ${chatId} not found.`);
    } else {
      console.error(`Error fetching chat with ID ${chatId}:`, error);
    }
    return null;
  }
}



export {getChatById, getChats, saveChat};