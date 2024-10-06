import './index.css';
import Head from './components/Head/head';
import makeMessage from './components/makeMessage/makeMessage';





const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const messageBox = document.querySelector('.ui');


const userName = 'Test user'; // Заглушка для имени пользователя
const userPic = '';


const getMessages= () => {
    return JSON.parse(localStorage.getItem('chatMessages')) || [];
};

const saveMessage = (messages) => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

const messageStorage = getMessages();



const goToChatList = () => {
    window.location.href = 'chatList.html'; // Перенаправление на страницу со списком чатов
};

const topBar = Head(true, goToChatList, userPic, userName);
document.querySelector('main').insertBefore(topBar, messageBox);




const loadMessages = (messages) => {
    messageBox.innerHTML = '';
    const part = document.createDocumentFragment();
    messages.forEach(({sender, text, time}) => {
        const elemnt_part = makeMessage({sender, text, time});
        part.appendChild(elemnt_part);
    });

    messageBox.appendChild(part)
};



const makeNewMessage = (content) =>{
    const messageTime = new Date().toLocaleString();
    const messageData = {
        // message_id: 1,
        sender: userName,
        text: content,
        time: messageTime
    };
    return messageData;
}

const placeMessage = (message) => {
    const element_part = makeMessage(message);
    messageBox.appendChild(element_part);
}

const pushToStorage = (data) => {
    const messageBox = getMessages();
    messageBox.push(data);
    saveMessage(messageBox);
}

const handleSubmit = (event) => {
    event.preventDefault();
    const messageText = input.value.trim();
    if (!messageText) {
        return;
    }
    
    const messageData = makeNewMessage(messageText);
    pushToStorage(messageData);
    placeMessage(messageData);


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
loadMessages(messageStorage);