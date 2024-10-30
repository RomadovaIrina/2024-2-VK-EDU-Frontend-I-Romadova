const getChats = () => {
    return JSON.parse(localStorage.getItem("chats")) || [];
  };
  const saveChats = (chats) => {
    localStorage.setItem("chats", JSON.stringify(chats));
  };

  const getChatById = (chatId) => {
    const chats = getChats();
    const foundChat = chats.find(chat => chat.chatId === parseInt(chatId));
    return foundChat;
  }


export{ getChats, saveChats, getChatById};