import React, { useEffect, useState } from "react";
import './ChatList.css';

import ChatPlace from "../../ChatPlace/ChatPlace";
import {getByID} from "../../../consts/users.js"

import EditIcon from '@mui/icons-material/Edit';


const ChatList = ({ onChatClick, goHome }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const chatBox = JSON.parse(localStorage.getItem("chats")) || [];
    setChats(chatBox);
  }, []);


  const handleAddChat = () => {
    const newChatName = prompt("Введите название нового чата:");
    if (!newChatName) return;

    const selectedUserId = prompt("Введите ID пользователя (например, 1 для Алисы):");

    const user = getByID(selectedUserId);
    if (!user) {
      alert("Пользователь с таким ID не найден!");
      return;
    }

    const chatTime = new Date().toLocaleString();
    const newChat = {
      chatId: chats.length + 1,
      userId: user.userID,
      name: newChatName,
      time: chatTime,
      lastMessage: "",
      isRead: false,
      avatar: user.avatar,
    };

    const updatedChats = [...chats, newChat];
    setChats(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));
  };

  const handleChatClick = (chatID) => {
    const foundChat = chats.find(chat => chat.chatId === chatID)
    onChatClick(chatID, foundChat.userId)
  }

  return (
    <main>
    <div className="chat-list">
      <ul>
        {chats.map((chat) => (
          <ChatPlace
            key={chat.chatId}
            chatId={chat.chatId}
            avatar={chat.avatar}
            name={chat.name}
            lastMessage={chat.lastMessage}
            time={chat.time}
            isRead={chat.isRead}
            onClick={() => handleChatClick(chat.chatId)}
          />
        ))}
        </ul>
      <div className="chatList-button">
      <button className="add-chat pulse" onClick={handleAddChat}>
      <EditIcon className="edit-icon" />
      </button>
      </div>
    </div>
    </main>
  );
};

export default ChatList;
