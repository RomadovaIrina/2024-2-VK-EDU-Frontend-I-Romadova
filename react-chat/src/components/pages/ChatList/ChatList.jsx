import React, { useEffect, useState, useRef } from "react";
import styles from './ChatList.module.scss';
import HeadBar from "../../HeadBar/HeadBar.jsx";
import ChatPlace from "../../ChatPlace/ChatPlace";
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { getUsers } from "../../../service/usersService.js";
import { ROUTES } from "../../../routes.js";
import RenderModal from './RenderModal.jsx';
import { saveChat } from "../../../service/chatsService.js";
import ChatListHooks from "../../hooks/ChatlistHooks.jsx";

const ChatList = () => {
  const { chats, setChats, setSearch, page, setPage } = ChatListHooks();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [newChatTitle, setNewChatTitle] = useState("");


  const toggleModal = () => {
    setIsModalOpened((prev) => !prev);
  };
  const navigate = useNavigate();



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
      {isModalOpened && (
  <RenderModal
    isOpen={isModalOpened}
    onClose={toggleModal}
    onChatCreated={(newChat) => setChats((prev) => [newChat, ...prev])}
  />
)}
    </main>
  );
};

export default ChatList;
