import React, { useEffect, useState, useRef } from "react";
import styles from './ChatList.module.scss';
import HeadBar from "../../HeadBar/HeadBar.jsx";
import ChatPlace from "../../ChatPlace/ChatPlace";
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { getUsers } from "../../../apiService/users/users.js";
import { ROUTES } from "../../../routes.js";
import RenderModal from './RenderModal.jsx'
import chatListHooks from "../../hooks/ChatlistHooks.js";

const ChatList = () => {
  const {chats, setSearch, page, setPage} = chatListHooks();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [newChatTitle, setNewChatTitle] = useState("");
  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState('');
  const [selected, setSelected] = useState(false);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);


  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
    setUserSearch('');
    setSelected(null);
  };
  const navigate = useNavigate();

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
      const createdChat = await saveChat(newChatData);
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


  const handleMenuClick = () => {
    navigate(ROUTES.PROFILE);
  };

  const createLink = (chatId) => ROUTES.CHAT_PATH(chatId);



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
      <RenderModal
      isOpen={isModalOpened}
      onClose={toggleModal}
      newChatTitle={newChatTitle}
      setNewChatTitle={setNewChatTitle}
      userSearch={userSearch}
      setUserSearch={setUserSearch}
      users={users}
      selected={selected}
      setSelected={setSelected}
      isLoadingUsers={isLoadingUsers}
      handleAddChat={handleAddChat}
    />
    </main>
  );
};

export default ChatList;
