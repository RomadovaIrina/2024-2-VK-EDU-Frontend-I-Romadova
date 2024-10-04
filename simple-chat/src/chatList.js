import './chatList.css'
import Head from './Head/head.js';
import ChatPlace from './ChatPlace/chatPlace.js';
// import {FloatingButton} from './FloatButton/floatButton'

const exampleChats = [
    {
        avatar: '',
        name: "first chat",
        lastMessage: "some text",
        time: "01:00",
        isRead: true
    },
    {
        avatar: '',
        name: "second chat",
        lastMessage: "some more text",
        time: "10:00",
        isRead: false
    },
    {
        avatar: '',
        name: "first cht",
        lastMessage: "sometext",
        time: "01:00",
        isRead: true
    },
    {
        avatar: '',
        name: "secod chat",
        lastMessage: "sme more text",
        time: "10:00",
        isRead: false
    },
    {
        avatar: '',
        name: "fi chat",
        lastMessage: "some t",
        time: "01:00",
        isRead: true
    },
    {
        avatar: '',
        name: "second chat",
        lastMessage: "some more text",
        time: "10:00",
        isRead: false
    },
    
    {
        avatar: '',
        name: "first cht",
        lastMessage: "sometext",
        time: "01:00",
        isRead: true
    },
    {
        avatar: '',
        name: "secod chat",
        lastMessage: "sme more text",
        time: "10:00",
        isRead: false
    },
    {
        avatar: '',
        name: "fi chat",
        lastMessage: "some t",
        time: "01:00",
        isRead: true
    },
    {
        avatar: '',
        name: "second chat",
        lastMessage: "some more text",
        time: "10:00",
        isRead: false
    },
    
    {
        avatar: '',
        name: "first cht",
        lastMessage: "sometext",
        time: "01:00",
        isRead: true
    },
    {
        avatar: '',
        name: "secod chat",
        lastMessage: "sme more text",
        time: "10:00",
        isRead: false
    },
    {
        avatar: '',
        name: "fi chat",
        lastMessage: "some t",
        time: "01:00",
        isRead: true
    },
    {
        avatar: '',
        name: "second chat",
        lastMessage: "some more text",
        time: "10:00",
        isRead: false
    }
];


localStorage.setItem('chats', JSON.stringify(exampleChats));

const chatList = document.querySelector('.ui');
const addChat = document.querySelector('.add-chat');
const goBack = document.querySelector('.go-back');


const chatBox = JSON.parse(localStorage.getItem('chats')) || [];

const topBar = Head(false);
document.querySelector('main').insertBefore(topBar, chatList);


const loadChats = () => {
    chatList.innerHTML = '';
    const fragment = document.createDocumentFragment();
    chatBox.forEach(({ avatar, name, lastMessage, time, isRead }) => {
        const chat = ChatPlace({ avatar, name, lastMessage, time, isRead });
        fragment.appendChild(chat);
    });
    chatList.appendChild(fragment);


};

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

    chatBox.push(newChat);
    localStorage.setItem('chats', JSON.stringify(chatsStorage));

    const newChatElement = ChatPlace(newChat);
    chatList.appendChild(newChatElement);
};


const handleGoback = () => {
    window.history.back();
}

addChat.addEventListener('click', handleAddChat);
goBack.addEventListener('click', handleGoback);

loadChats();