import { useState, useEffect } from 'react';
import {HashRouter as Router, Link, Route, Routes} from 'react-router-dom'

import styles from './App.module.scss';

import ChatList from './components/pages/ChatList/ChatList';
import ChatPage from './components/pages/ChatPage/ChatPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';

import { getByID, USERS } from './mockUsers.js';
import { initUsers } from './api/users/users.js';


const ROUTES = {
  ROOT:"/",
  CHAT:"/chat/:chatId",
  PROFILE:"/profile/:userId"
}


function App() {
  useEffect(() => {
    initUsers(USERS);
  }, []);



  return (
    <Router>
    <div className={styles.constent}>
      <Routes>
          <Route path={ROUTES.ROOT} element={<ChatList />} />
          <Route path={ROUTES.CHAT} element={<ChatPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
