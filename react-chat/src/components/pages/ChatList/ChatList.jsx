import React, { useEffect, useState } from "react";
import styles from './ChatList.module.scss';
import HeadBar from "../../HeadBar/HeadBar.jsx";
import ChatPlace from "../../ChatPlace/ChatPlace";
import { getAuthHeaders } from '../../../api_service/auth/auth.js';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { getChats, saveChat } from "../../../api_service/chats/chats.js";
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadChats = async () => {
      try {
        const chatBox = await getChats(getAuthHeaders());
        setChats(chatBox.results || []);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    loadChats();
  }, []);

  const handleAddChat = async () => {
    const newChatName = prompt("Введите название нового чата:");
    if (!newChatName) return;
  
    const username = prompt("Введите username пользователя:");
    if (!username) {
      alert("Username не может быть пустым!");
      return;
    }
  
    try {
      const newChatData = {
        members: [username],
        is_private: true,
        title: newChatName
      };
  
      const createdChat = await saveChat(newChatData, getAuthHeaders());
  
      if (createdChat) {
        setChats((prevChats) => [createdChat, ...prevChats]);
      } else {
        alert("Не удалось создать чат");
      }
    } catch (error) {
      alert("Не удалось создать чат");
    }
  };

  const handleChatClick = (chatId) => {
    navigate(`/chat/${chatId}`);
  };

  const handleMenuClick = () => {
    navigate(`/profile/1`);
  };

  const createLink = (chatId) => `/chat/${chatId}`;

  return (
    <main>
      <HeadBar
        leftPlace={<MenuIcon className={styles.menuIcon} sx={{ fontSize: 40 }} onClick={handleMenuClick} />}
        centerPlace={<span className={styles.messenger}>Messenger</span>}
        rightPlace={<SearchIcon className={styles.searchIcon} sx={{ fontSize: 40 }} />}
      />
      <div className={styles.chatList}>
        <ul>
          {chats.map((chat) => (
            <Link key={chat.id} to={createLink(chat.id)}>
              <ChatPlace
                chatId={chat.id}
                avatar={chat.avatar}
                name={chat.title}
                lastMessage={chat.last_message?.text || ""}
                time={chat.last_message?.created_at || ""}
                isRead={false} 
                onClick={handleChatClick}
              />
            </Link>
          ))}
        </ul>
        <div className={styles.chatListButton}>
          <button type="button" className={classNames(styles.addChat, styles.pulse)} onClick={handleAddChat}>
            <EditIcon className={styles.editIcon} sx={{ fontSize: 36 }} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ChatList;
