import React, { useEffect, useState, useRef } from "react";
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
import ModalWindow from "../../ModalWindow/ModalWindow.jsx";
import { getUsers } from "../../../apiService/users/users.js";
import DEFAULT_AVATAR from '../../../../public/temp.png';
import EditInput from "../../EditInput/EditInput.jsx";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [search, setSearch] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [newChatTitle, setNewChatTitle] = useState("");
  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState('');
  const [selected, setSelected] = useState(false);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [isPolling, setIsPolling] = useState(true); 
  const pollingRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
    setUserSearch('');
    setSelected(null);
  };
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


  const beginPoll = async () => {
    if (!isModalOpened) {
      await loadChats();
    }
    pollingRef.current = setTimeout(beginPoll, 10000);
  };
  const endPoll = () => {
    if (pollingRef.current) {
      clearTimeout(pollingRef.current);
      pollingRef.current = null;
    }
  };

  useEffect(() => {
    beginPoll();
    return endPoll;
  }, []);

  const handleAddChat = async () => {
    try {
      if (!selected) {
        alert("Пользователь не найден!");
        return;
      }
      const newChatData = {
        members: [selected],
        is_private: true,
        title: newChatTitle,
      };
      const createdChat = await saveChat(newChatData, getAuthHeaders());
      if (createdChat) {
        setChats((prevChats) => [createdChat, ...prevChats]);
      } else {
        alert("Не удалось создать чат");
      }
      toggleModal();
    } catch (error) {
      alert("Не удалось создать чат");
    }
  };


  const handleUserSearch = async () => {
    setIsLoadingUsers(true);
    try {
      const userinfo = await getUsers({ search: userSearch, page: 1, page_size: 20 });
      setUsers(userinfo?.results || []);
    } catch (error) {
      console.error('Error fetching ursers:', error);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  useEffect(() => {
    if (isModalOpened) {
      handleUserSearch();
    }
  }, [userSearch, isModalOpened]);

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

  const UserSearch = () => {
    return (
      <ul className={styles.userList}>
        {users?.map((user) => (
          <li
            key={user.id}
            className={classNames(styles.userItem, {
              [styles.selected]: selected === user.id,
            })}
            onClick={() => setSelected(user.id)}
          >
            <img src={user.avatar || DEFAULT_AVATAR} alt={user.username} className={styles.userAvatarList} />
            <span>{user.username}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <main>
      <HeadBar
        leftPlace={<MenuIcon className={styles.menuIcon} sx={{ fontSize: 40 }} onClick={handleMenuClick} />}
        centerPlace={<span className={styles.messenger}>Messenger</span>}
        rightPlace={<SearchIcon className={styles.searchIcon} sx={{ fontSize: 40 }} />}
      />
      <div className={styles.chatList}>
        <ul >
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
          <button type="button" className={classNames(styles.addChat, styles.pulse)} onClick={toggleModal}>
            <EditIcon className={styles.editIcon} sx={{ fontSize: 36 }} />
          </button>
        </div>
      </div>

      {isModalOpened && (
        <ModalWindow title="Создать новый чат" onClose={toggleModal}>
          <div>
            <EditInput
              labelName="Название чата"
              value={newChatTitle}
              onChange={(value) => setNewChatTitle(value)}
              readOnly={false}
            />
            <EditInput
              labelName="Username пользователя"
              value={userSearch}
              onChange={(value) => setUserSearch(value)}
              readOnly={false}
            />
            {isLoadingUsers ? (
              <p> Загрузка пользователей...</p>
            ) :
              (<UserSearch />)}
            <button onClick={handleAddChat} className={styles.createButton}>
              Создать
            </button>
          </div>
        </ModalWindow>
      )}
    </main>
  );
};

export default ChatList;
