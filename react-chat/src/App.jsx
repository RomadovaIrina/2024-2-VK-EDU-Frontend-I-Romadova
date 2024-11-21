import { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import { createContext, useContext } from 'react';
import styles from './App.module.scss';
import ChatList from './components/pages/ChatList/ChatList';
import ChatPage from './components/pages/ChatPage/ChatPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import AuthGuard from './components/AuthGuard';
import { ROUTES } from './routes';
import { ChatWrapper } from './ChatContext';
import LoginPage from './components/pages/AuthPage/LoginPage';
import RegisterPage from './components/pages/AuthPage/RegisterPage';


function App() {
  const [isRegistering, setIsRegistering] = useState(false);


  return (
    <Router>
      <div className={styles.content}>
        <Routes>
          <Route
            path={ROUTES.LOGIN}
            element={
              <LoginPage isRegistering={false} />}
          />
          <Route
            path={ROUTES.REGISTER}
            element={
              <RegisterPage isRegistering={true} />}
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
                <ChatWrapper>
                <ChatPage />
                </ChatWrapper>
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
