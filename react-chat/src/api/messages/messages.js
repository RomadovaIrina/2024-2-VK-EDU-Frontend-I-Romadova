
const saveMessage = (newMessage) => {
    const storedMessages = getAllMessages();
    const updatedMessages = Array.isArray(newMessage)
        ? [...storedMessages, ...newMessage] 
        : [...storedMessages, newMessage]; 
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
}

const getAllMessages = () => {
    return JSON.parse(localStorage.getItem('chatMessages')) || [];
};

const getMessages = (chatId) => {
    const allMessages = getAllMessages();
    return allMessages.filter(message => message.chatId === chatId);
};

export {saveMessage, getAllMessages, getMessages};