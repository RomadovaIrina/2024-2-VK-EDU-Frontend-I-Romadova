import { useState, useEffect } from 'react';
import {HashRouter as Router, Link, Route, Routes} from 'react-router-dom'

import styles from './App.module.scss';

import ChatList from './components/pages/ChatList/ChatList';
import ChatPage from './components/pages/ChatPage/ChatPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';

import { getByID, USERS } from './mockUsers.js';

function App() {
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(USERS));
  }, []);


  const handleChatClick = (chatId, userId) => {
    console.log("handleChatClick called with chatId:", chatId, "userId:", userId); 
  };
  return (
    <Router>
    <div className={styles.constent}>
      <Routes>
          <Route path="/" element={<ChatList onChatClick={handleChatClick}/>}/>
          <Route path="/chat/:chatId/:userId" element={<ChatPage/>}/>
          <Route path="/profile/:userId" element={<ProfilePage/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
