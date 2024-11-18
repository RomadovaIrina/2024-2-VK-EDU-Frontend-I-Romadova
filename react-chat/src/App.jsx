import { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import styles from './App.module.scss';
import ChatList from './components/pages/ChatList/ChatList';
import ChatPage from './components/pages/ChatPage/ChatPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import AuthGuard from './components/AuthGuard';
import { ROUTES } from './routes';
import AuthPage from './components/pages/AuthPage/AuthPage';


function App() {
  const [isRegistering, setIsRegistering] = useState(false);


  return (
    <Router>
      <div className={styles.content}>
        <Routes>
          <Route
            path={ROUTES.LOGIN}
            element={
              <AuthPage isRegistering={false} />}
          />
          <Route
            path={ROUTES.REGISTER}
            element={
              <AuthPage isRegistering={true} />}
          />
          <Route
            path={ROUTES.ROOT}
            element={
              <AuthGuard>
                <ChatList />
              </AuthGuard>
            }
          />
          <Route
            path={ROUTES.PROFILE}
            element={
              <AuthGuard>
                <ProfilePage />
              </AuthGuard>
            }
          />
          <Route
            path={ROUTES.CHAT}
            element={
              <AuthGuard>
                <ChatPage />
              </AuthGuard>
            }
          />
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
