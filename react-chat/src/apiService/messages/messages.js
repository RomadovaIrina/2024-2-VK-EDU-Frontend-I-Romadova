import apiService from "../apiService";

async function saveMessage(newMessage) {
    try {
      await apiService.post('messages', newMessage);
    } catch (error) {
      console.error("Error saving message:", error);
    }
  }
  
   async function getAllMessages() {
    try {
      const response = await apiService.get('messages');
      return response.data;
    } catch (error) {
      console.error("Error fetching messages:", error);
      return [];
    }
  }
  
   async function getMessages(chatId) {
    try {
      const response = await apiService.get(`messages`, {
        params:{
          chat: chatId,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching messages for chat ID ${chatId}:`, error);
      return [];
    }
  }


export {getAllMessages, saveMessage, getMessages};