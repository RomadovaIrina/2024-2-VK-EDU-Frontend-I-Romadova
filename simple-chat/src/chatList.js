
import './chatList.css';
import Head from './components/Head/head.js';
import ChatPlace from './components/ChatPlace/chatPlace.js';

const saveChats = (chats) => {
    localStorage.setItem('chats', JSON.stringify(chats));
};

const getChats = () => {
    return JSON.parse(localStorage.getItem('chats')) || [];
};

const chatList = document.querySelector('.ui');
const addChat = document.querySelector('.add-chat');
const goBack = document.querySelector('.go-back');


const chatBox = getChats();
const topBar = Head(false);
document.querySelector('main').insertBefore(topBar, chatList);


const loadChats = (chats) => {
    chatList.innerHTML = '';
    const fragment = document.createDocumentFragment();
    chats.forEach(({ chat_id, avatar, name, lastMessage, time, isRead }) => {
        const chat = ChatPlace({ chat_id, avatar, name, lastMessage, time, isRead });
        chat.addEventListener('click', () => {
            window.location.href = `index.html?chat_id=${chat_id}&user=${userName}`;
        });
        
        fragment.appendChild(chat);
    });
    chatList.appendChild(fragment);
};

const makeNewChat = (chat) => {
    const chatBox = getChats();
    chatBox.push(chat);
    saveChats(chatBox);
    loadChats(chatBox);
};

const handleAddChat = () => {
    const newChatName = prompt("Введите название нового чата:");
    if (!newChatName) return;

    const chatTime = new Date().toLocaleString();
    const newChat = {
        chat_id: chatBox.length + 1,
        name: newChatName,
        time: chatTime,
        lastMessage: '',
        isRead: false,
        avatar: ''
    };
    makeNewChat(newChat);
};

addChat.addEventListener('click', handleAddChat);
goBack.addEventListener('click', () => window.history.back());

loadChats(chatBox);
