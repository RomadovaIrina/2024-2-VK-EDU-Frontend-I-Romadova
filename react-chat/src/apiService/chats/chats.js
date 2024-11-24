import apiService from "../apiService";

const getChatsApi = async ({ search = '', page = 1, page_size = 10 } = {}) => {
  try {
    const response = await apiService.get('/chats/', {
      params: {
        search,
        page,
        page_size,
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Failed to load chats:", error.response?.data || error.message);
    throw error; 
  }
};

const saveChatApi = async (chatData) => {
  try {
    const response = await apiService.post('chats/', chatData);
    return response.data;
  } catch (error) {
    console.error("Ошибка при создании чата:", error.response?.data || error.message);
    throw error; 
  }
};

const getChatByIdApi = async (chatId) => {
  try {
    const response = await apiService.get(`chat/${chatId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching chat with ID ${chatId}:`, error.response?.data || error.message);
    throw error; 
  }
};

export { getChatsApi, saveChatApi, getChatByIdApi };
