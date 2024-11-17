import apiService from "../apiService";

const getChats = async ({ search = '', page = 1, page_size = 10 } = {}) => {
  try {
    const response = await apiService.get('/chats/', {
      params: {
        search,
        page,
        page_size
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Failed to load chats:", error.response?.data || error.message);
    return null; 
  }
};


const saveChat = async(chatData) => {
  try {
    const response = await apiService.post('chats/', chatData);
    return response.data;
  } catch (error) {
    console.error("Ошибка при создании чата:", error.response?.data || error.message);
    alert("Не удалось создать чат");
    return null;
  }
}
const  getChatById = async(chatId)=> {
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