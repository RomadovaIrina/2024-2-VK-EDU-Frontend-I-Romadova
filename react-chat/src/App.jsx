import { useState, useEffect } from 'react'
import './App.css'


import ChatList from './components/pages/ChatList/ChatList';
import HeadBar from './components/HeadBar/HeadBar';
import ChatPage from './components/pages/ChatPage/ChatPage';

import { getByID, USERS } from './mockUsers.js';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


function App() {
  const [currentPage, setCurrentPage] = useState('chatList');
  const [activeChat, setActiveChat] = useState(null);
  const [activeUserId, setActiveUserId] = useState(null);
  const [chatUserId, setChatUserId] = useState(null);

  const initializeUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  useEffect(() => {
    initializeUsers(USERS);
  }, []);

  const goToChatList = () => {
    setCurrentPage('chatList');
  };

  const goHome = () => {
    setCurrentPage('home');
  };

  const handleChatClick = (chatId, chatUserId) => {
    setActiveChat(chatId);
    setChatter(chatUserId);
    setCurrentPage('chatPage');
  };

  const openExactChat = (chatID, userID) => {
    setActiveChat(chatID);
    setActiveUserId(userID)
    setCurrentPage('chatPage')
  }

  const pageContent =
    currentPage === 'chatList' ? (
      <ChatList onChatClick={openExactChat} goHome={goHome} />
    ) : (
      <ChatPage chatId={activeChat} userId={chatUserId} goToChatList={goToChatList} />
    );

  const chatUser = chatUserId ? getByID(chatUserId) : null;


  const headerContent = currentPage === 'chatList' ?
    (
      {
        leftPlace: <MenuIcon className="menu-icon" sx={{ fontSize: 40 }} />,
        centerPlace: <span className='messenger'>Messenger</span>,
        rightPlace: <SearchIcon className="search-icon" sx={{ fontSize: 40 }} />,
        userPic: null,
        userName: null
      }

    ) : (
      {
        leftPlace: <ArrowBackIcon className="arrow"
          sx={{ fontSize: 40 }}
          onClick={goToChatList} />,
        centerPlace: null,
        rightPlace: null,
        userPic: chatUser?.chatUser.avatar ?? null,
        userName: chatUser?.chatUser.name ?? 'Unknown'
      }
    );


  return (
    <div className='constent'>
      <HeadBar {...headerContent} />
      {pageContent}
    </div>
  );
}

export default App
