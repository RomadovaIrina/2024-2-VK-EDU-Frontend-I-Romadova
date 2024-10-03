import './index.css';
import Head from './Head/head';
import makeMessage from './makeMessage/makeMessage';





const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const messageBox = document.querySelector('.ui');

const userName = 'Test user'; // Заглушка для имени пользователя
const userPic = '';

const messagesStorage = JSON.parse(localStorage.getItem('chatMessages')) || [];


const goToChatList = () => {
    window.location.href = 'chatList.html'; // Перенаправление на страницу со списком чатов
};

const topBar = Head(true, goToChatList, userPic, userName);
document.querySelector('main').insertBefore(topBar, messageBox);




const loadMessages = () => {
    messageBox.innerHTML = '';
    const part = document.createDocumentFragment();
    messagesStorage.forEach(({sender, text, time}) => {
        const elemnt_part = makeMessage({sender, text, time});
        part.appendChild(elemnt_part);
    });

    messageBox.appendChild(part)
};

const handleSubmit = (event) => {
    event.preventDefault();
    const messageText = input.value.trim();
    const messageTime = new Date().toLocaleString();
    if (!messageText) {
        return;
    }
    const messageData = {
        sender: userName,
        text: messageText,
        time: messageTime
    };
    messagesStorage.push(messageData);
    localStorage.setItem('chatMessages', JSON.stringify(messagesStorage));
    const elemnt_part = makeMessage({sender, text, time});
    messageBox.appendChild(elemnt_part);
    input.value = '';
    input.focus();
    messageBox.scrollTop = messageBox.scrollHeight;
};

const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleSubmit(event);
    }
};



form.addEventListener('submit', handleSubmit);
form.addEventListener('keydown', handleKeyPress);

// Загрузка при открытии
loadMessages();