
const saveMessage = (messages) => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
};

const getAllMessages = () => {
    return JSON.parse(localStorage.getItem('chatMessages')) || [];
};

const getMessages = (chatId) => {
    const allMessages = getAllMessages();
    return allMessages.filter(message => message.chatId === chatId);
};

export {saveMessage, getAllMessages, getMessages};