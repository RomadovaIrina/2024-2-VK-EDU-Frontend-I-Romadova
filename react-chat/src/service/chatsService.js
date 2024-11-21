import { getChatsApi, getChatByIdApi, saveChatApi } from "../apiService/chats/chats";

const getChats = async (filters) => {
  try {
    const response =  await getChatsApi(filters);
    return respone
  } catch (error) {
    alert("Не удалось загрузить чаты. Попробуйте позже.");
    return null; 
  }
};


const saveChat = async (chatData) => {
  try {
    return await saveChatApi(chatData);
  } catch (error) {
    alert("Не удалось создать чат. Проверьте данные.");
    return null; 
  }
};


const getChatById = async (chatId) => {
  try {
    return await getChatByIdApi(chatId);
  } catch (error) {
    if (error.response?.status === 404) {
      alert("Чат не найден.");
    } else {
      alert("Ошибка при получении данных чата.");
    }
    return null; 
  }
};

export { getChats, saveChat, getChatById };
