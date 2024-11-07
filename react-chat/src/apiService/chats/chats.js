import apiService from "../apiService";

async function getChats() {
  try {
    const response = await apiService.get('chats');
    return response.data.results;
  } catch (error) {
    console.error("Error fetching chats:", error);
    return [];
  }
}


 async function saveChat(chatData) {
  try {
    const response = await apiService.post('chats/', chatData);
    return response.data;
  } catch (error) {
    console.error("Error saving chat:", error);
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