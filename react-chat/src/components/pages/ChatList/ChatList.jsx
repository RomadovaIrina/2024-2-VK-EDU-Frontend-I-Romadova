import React, { useEffect, useState } from "react";
import styles from './ChatList.module.scss';
import HeadBar from "../../HeadBar/HeadBar.jsx";

import ChatPlace from "../../ChatPlace/ChatPlace";
import { getByID } from "../../../mockUsers.js";
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { getChats, saveChats } from "../../../api/chats/chats.js";
import { Link, useNavigate } from 'react-router-dom';

const ChatList = (props) => {
  const { onChatClick } = props;
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const chatBox = getChats();
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
      chatId: Date.now(),
      userId: user.id,
      name: user.name,
      time: chatTime,
      lastMessage: "",
      isRead: false,
      avatar: user.avatar,
      chatName: newChatName
    };

    const updatedChats = [...chats, newChat];
    setChats(updatedChats);
    saveChats(updatedChats);
  };

  const handleChatClick = (chatID) => {
    const foundChat = chats.find(chat => chat.chatId === chatID);
    onChatClick(chatID, foundChat.userId);
    navigate(`/chat/${chatID}/${foundChat.userId}`);
  };

  const handleMenuClick = () => {
      const userId = 1; 
      navigate(`/profile/${userId}`);
  }

  return (
    <main>
      <HeadBar
        leftPlace={<MenuIcon className={styles.menuIcon} sx={{ fontSize: 40 }} onClick = {handleMenuClick}/>}
        centerPlace={<span className={styles.messenger}>Messenger</span>}
        rightPlace={<SearchIcon className={styles.searchIcon} sx={{ fontSize: 40 }} />}
      />
      <div className={styles.chatList}>
        <ul>
          {chats.map((chat) => (
            <Link key={chat.chatId} to={`/chat/${chat.chatId}/${chat.userId}`}>
              <ChatPlace
                chatId={chat.chatId}
                avatar={chat.avatar}
                name={chat.chatName}
                lastMessage={chat.lastMessage}
                time={chat.time}
                isRead={chat.isRead}
                onClick={handleChatClick}
              />
            </Link>
          ))}
        </ul>
        <div className={styles.chatListButton}>
          <button type="button" className={`${styles.addChat} ${styles.pulse}`} onClick={handleAddChat}>
            <EditIcon className={styles.editIcon} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ChatList;
