import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import ChatList from './components/pages/ChatList/ChatList';
import HeadBar from './components/HeadBar/HeadBar';
import ChatPage from './components/pages/ChatPage/ChatPage';

import { initializeUsers } from './consts/users';


function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('chatList');
  const [activeChat, setActiveChat] = useState(null);
  const [activeUserId, setActiveUserId] = useState(null);
  useEffect(() => {
    initializeUsers();
  }, []);

  const goToChatList = () => {
    setCurrentPage('chatList');
  };

  const goHome = () => {
    setCurrentPage('home');
  };

  const handleChatClick = (chatId) => {
    setActiveChat(chatId);
    setCurrentPage('chatPage');
  };

  const openExactChat = (chatID, userID) => {
    setActiveChat(chatID);
    setActiveUserId(userID)
    setCurrentPage('chatPage')
  }

  return (
    <>
      {currentPage === 'chatList' ? (
         <>
         <HeadBar 
           isChatOpen={currentPage === 'chatPage'}
           isChatList={currentPage === 'chatList'}
           goBackToChatList={goToChatList} 
         />
         <ChatList onChatClick={openExactChat} goHome={goHome} />
       </>
      ) : (
        <ChatPage chatId={activeChat} userId={activeUserId} goToChatList={goToChatList} />
      )}
    </>
  );
}

export default App
