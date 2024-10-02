import './chatPlace.css';


 const ChatPlace = ({ name, time }) => {
    const chat = document.createElement('li');
    chat.classList.add('chat-place');

    const chatName = document.createElement('div');
    chatName.classList.add('chat-name');
    chatName.textContent = name;

    const chatTime = document.createElement('div');
    chatTime.classList.add('chat-time');
    chatTime.textContent = time;

    chat.appendChild(chatName);
    chat.appendChild(chatTime);

    return chat;
};

export default ChatPlace;