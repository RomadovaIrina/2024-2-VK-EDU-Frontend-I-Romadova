import { getMessagesApi, saveMessageApi, getAllMessagesApi } from "../apiService/messages/messages";

const getMessages = async (chatId, page = 1, pageSize = 20) => {
    try {
      const response = await getMessagesApi({ chatId, page, page_size: pageSize });
      const sortedMessages = response.results.sort((a, b) =>
        new Date(a.created_at) - new Date(b.created_at)
      );
      return { ...response, results: sortedMessages };
    } catch (error) {
      alert(`Ошибка загрузки сообщений для чата ${chatId}. Попробуйте позже.`);
      return { results: [] };
    }
  };

  const saveMessage = async (messageData) => {
    try {
      return await saveMessageApi(messageData);
    } catch (error) {
      alert("Не удалось сохранить сообщение. Проверьте данные.");
      return null;
    }
  };
  
  const getAllMessages = async () => {
    try {
      return await getAllMessagesApi();
    } catch (error) {
      alert("Не удалось загрузить все сообщения. Попробуйте позже.");
      return [];
    }
  }; 
  

export {getMessages, saveMessage, getAllMessages};  