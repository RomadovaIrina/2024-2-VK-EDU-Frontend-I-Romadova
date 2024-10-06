import './chatList.css'
import Head from './components/Head/head.js';
import ChatPlace from './components/ChatPlace/chatPlace.js';

const EXAMPLE_CHATS = [
    {
        chat_id: 1,
        avatar: '',
        name: "first chat",
        lastMessage: "some text",
        time: "01:00",
        isRead: true
    },
    {
        chat_id: 2,
        avatar: '',
        name: "second chat",
        lastMessage: "some more text",
        time: "10:00",
        isRead: false
    }
];

const saveChats = (chats) => {
    localStorage.setItem('chats', JSON.stringify(chats));
};

const getChats = () => {
    return JSON.parse(localStorage.getItem('chats')) || [];
};

saveChats(EXAMPLE_CHATS);

const chatList = document.querySelector('.ui');
const addChat = document.querySelector('.add-chat');
const goBack = document.querySelector('.go-back');


const chatBox = getChats();

const topBar = Head(false);
document.querySelector('main').insertBefore(topBar, chatList);


const loadChats = (chats) => {
    chatList.innerHTML = '';
    const fragment = document.createDocumentFragment();
    chats.forEach(({ avatar, name, lastMessage, time, isRead }) => {
        const chat = ChatPlace({ avatar, name, lastMessage, time, isRead });
        fragment.appendChild(chat);
    });
    chatList.appendChild(fragment);


};

const pushToStorage = (chat) => {
    const chatBox = getChats()
    chatBox.push(chat);
    saveChats(chatBox);
}

const placeNew = (chat) => {
    const newChatElement = ChatPlace(chat);
    chatList.appendChild(newChatElement);
}

const makeNewChat = (chat) => {
    pushToStorage(chat);
    placeNew(chat);
}

const handleAddChat = () => {
    const newChatName = prompt("Введите название нового чата:");
    if (!newChatName) return;

    const chatTime = new Date().toLocaleString();
    const newChat = {
        name: newChatName,
        time: chatTime,
        lastMessage: '',
        isRead: false,
        avatar: ''
    };
    makeNewChat(newChat);

};


const handleGoback = () => {
    window.history.back();
}

addChat.addEventListener('click', handleAddChat);
goBack.addEventListener('click', handleGoback);

loadChats(chatBox);