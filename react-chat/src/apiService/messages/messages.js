import apiService from "../apiService";
import { getAccessToken } from "../tokens/tokenManager";

// async function saveMessage(newMessage) {
//   debugger;
//   try {
//     const formData = new FormData();
//     const accessToken = getAccessToken();
//     formData.append("text", newMessage.text);
//     formData.append("chat", newMessage.chat);

//     const response = await apiService.post('messages/', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': `Bearer ${accessToken}`,
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error saving message:", error.response?.data || error.message);
//     return null;
//   }
// }
const saveMessage = async (messageData) => {
  try {
      const response = await apiService.post(`messages/`, messageData);
      return response.data;
  } catch (error) {
      console.error("Ошибка при сохранении сообщения:", error);
      throw error;
  }
};

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
    const response = await apiService.get('messages/', {
      params: {
        chat: chatId,
        page_size: 20,
        page: 1
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching messages for chat ID ${chatId}:`, error.response?.data || error.message);
    return { results: [] };
  }
}


export { getAllMessages, saveMessage, getMessages };