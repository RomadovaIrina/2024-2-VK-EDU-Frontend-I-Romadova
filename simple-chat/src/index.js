import './index.css';
import Head from './Head/head';





const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const messageBox = document.querySelector('.ui');
const userName = 'Unknown'; // Заглушка для имени пользователя

const messagesStorage = JSON.parse(localStorage.getItem('chatMessages')) || [];


const goToChatList = () => {
    window.location.href = 'chatList.html'; // Перенаправление на страницу со списком чатов
};

const topBar = Head(true, goToChatList);
document.querySelector('main').insertBefore(topBar, messageBox);




const loadMessages = () => {
    messageBox.innerHTML = '';
    const part = document.createDocumentFragment();
    messagesStorage.forEach((messageData) => {
        const elemnt_part = makeElement(messageData);
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
    const elemnt_part = makeElement(messageData);
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

const makeElement = (messageData) => {
    const elemnt_part = document.createElement('li');
    elemnt_part.classList.add('message');

    const messageHeader = document.createElement('div');
    messageHeader.classList.add('message-header');
    messageHeader.textContent = messageData.sender;

    const messageBody = document.createElement('div');
    messageBody.classList.add('message-body');
    messageBody.textContent = messageData.text;

    const messageFooter = document.createElement('div');
    messageFooter.classList.add('message-footer');
    messageFooter.textContent = `${messageData.time}`;

    elemnt_part.appendChild(messageHeader);
    elemnt_part.appendChild(messageBody);
    elemnt_part.appendChild(messageFooter);

    return elemnt_part;

};


form.addEventListener('submit', handleSubmit);
form.addEventListener('keydown', handleKeyPress);

// Загрузка при открытии
loadMessages();