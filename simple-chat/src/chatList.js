import './chatList.css'
import Head from  './Head/head.js';
import ChatPlace from './ChatPlace/chatPlace.js';
// import {FloatingButton} from './FloatButton/floatButton'

const example_chats = [
    { name: "first chat", time: "01:00" },
    { name: "second chat", time: "10:00" }
];

localStorage.setItem('chats', JSON.stringify(example_chats));

const chatList = document.querySelector('.ui');
const addChat = document.querySelector('.add-chat');

const chatBox = JSON.parse(localStorage.getItem('chats')) || [];

const topBar = Head(false);
document.querySelector('main').insertBefore(topBar, chatList);


const loadChats = () => {
    chatList.innerHTML = '';
    const fragment = document.createDocumentFragment();
    chatBox.forEach(({ name, time }) => {
        const chat = ChatPlace({ name, time });
        fragment.appendChild(chat);
    });
    chatList.appendChild(fragment);


};


const makeChat = (chatData) => {
    const chatEl = document.createElement('li');
    chatEl.classList.add('chat-place');

    const chatName = document.createElement('div');
    chatName.classList.add('chat-name');
    chatName.textContent = chatData.name;

    // Время последнего сообщения (если будет в будущем)
    const chatTime = document.createElement('div');
    chatTime.classList.add('chat-time');
    chatTime.textContent = chatData.time;

    chatEl.appendChild(chatName);
    chatEl.appendChild(chatTime);

    return chatEl;
};

const handleAddChat = () => {
    const newChatName = prompt("Введите название нового чата:"); // Имитация ввода нового чата
    if (!newChatName) return; // Не добавляем пустой чат

    const chatTime = new Date().toLocaleString(); // Время создания чата
    const newChat = { name: newChatName, time: chatTime };

    chatsStorage.push(newChat); // Добавляем новый чат в массив
    localStorage.setItem('chats', JSON.stringify(chatsStorage)); // Обновляем LocalStorage

    const newChatElement = makeChat(newChat); // Создаем элемент нового чата
    chatList.appendChild(newChatElement); // Добавляем новый чат в DOM
};

// Добавляем обработчик на кнопку добавления чата
addChat.addEventListener('click', handleAddChat);

// Загрузка чатов при открытии страницы
loadChats();
