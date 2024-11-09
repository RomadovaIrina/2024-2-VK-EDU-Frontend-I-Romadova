import React, { useEffect, useState } from "react";
import styles from './ChatList.module.scss';
import HeadBar from "../../HeadBar/HeadBar.jsx";
import ChatPlace from "../../ChatPlace/ChatPlace";
import { getAuthHeaders } from '../../../apiService/auth/auth.js';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { getChats, saveChat } from "../../../apiService/chats/chats.js";
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { getUserByUsername } from "../../../apiService/users/users.js";
import { getAccessToken, checkOnLogin } from "../../../apiService/tokens/tokenManager.js";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [page, setPage] = useState(1); 
  const [pageSize] = useState(10);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const loadChats = async (search = '', pageSize = 10, page = 1) => {
    try {
      const chatBox = await getChats(search, page, pageSize);
      if (chatBox) {
        setChats(chatBox.results || []);
      } else {
        console.error("Chat data not loaded");
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };
  useEffect(() => {
    loadChats(search, pageSize, page);
  }, [page, search]); 

  const handleAddChat = async () => {
    const newChatName = prompt("Введите название нового чата:");
    // пока что на 2 пользователя
    const isPrivate = true;
  
    const username = prompt("Введите username пользователя:");
    if (!username) {
      alert("Username не может быть пустым!");
      return;
    }
  
    try {
      const user = await getUserByUsername(username);
      if (!user) {
        alert("Пользователь не найден!");
        return;
      }
  
      const newChatData = {
        members: [user.id],
        is_private: isPrivate,
        title: newChatName,
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
    if (chatId) {
      navigate(`/chat/${chatId}`);
    } else {
      console.error("Chat ID is undefined!");
    }
  };

  const handleMenuClick = () => {
    navigate(`/profile`);
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
            <Link key={chat.id} to={createLink(chat.id)} className={styles.chatLink}>
              <ChatPlace
                avatar={chat.avatar}
                name={chat.title}
                lastMessage={chat.last_message?.text || ""}
                time={chat.last_message?.created_at || ""}
                isRead={false}
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
