import apiService from "../apiService";
import { getAccessToken } from "../tokens/tokenManager";


const saveMessage = async (messageData, files = [], voice = null) => {
  try {
    const formData = new FormData();
    formData.append('chat', messageData.chat);

    if (voice) {
      formData.append('voice', voice, 'voice.mp3');
    } else if (files.length > 0) {
      files.forEach((file) => formData.append('files', file));
      files.forEach((file, index) => {
        console.log(`File ${index + 1} - Name: ${file.url}`);
      });
    if (messageData.text) formData.append('text', messageData.text);
    } else {
      formData.append('text', messageData.text);
    }

    const response = await apiService.post('messages/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${getAccessToken()}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при сохранении сообщения:", error);
    throw error;
  }
};


const getAllMessages = async () => {
  try {
    const response = await apiService.get('messages');
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}

const getMessages = async (chatId) => {
  try {
    const response = await apiService.get('messages/', {
      params: {
        chat: chatId,
        page_size: 20,
        page: 1
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