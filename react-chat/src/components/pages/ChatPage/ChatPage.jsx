import React, { useEffect, useState, useRef } from "react";
import styles from './ChatPage.module.scss';
import MakeMessage from "../../MakeMessage";
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getMessages, saveMessage } from "../../../api/messages/messages.js"
import { getByID } from "../../../mockUsers.js"

import HeadBar from "../../HeadBar/HeadBar.jsx";
import { useParams, useNavigate } from 'react-router-dom';
import DEFAULT_AVATAR from '../../../../public/temp.png';
import { getChats, getChatById } from "../../../api/chats/chats.js";

const ChatPage = () => {
  const { chatId} = useParams();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputPalce = useRef(null);
  const [lastMessageId, setLastMessageId] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    const foundChat = getChatById(chatId);
    if (foundChat) {
      const foundUser = getByID(foundChat.userId);
      setUser(foundUser);
    }
    else {
      navigate('/');
    }
  }, [chatId, navigate]);

  useEffect(() => {
    const loadedMessages = getMessages(chatId); 
    setMessages(loadedMessages);
  }, [chatId]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);


  const makeNewMessage = (content) => {
    const messageTime = new Date().toLocaleString();
    const messageData = {
      message_id: Date.now(),
      chatId: chatId,
      sender: user?.name ?? 'Вы',
      text: content,
      time: messageTime
    };
    return messageData;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageText = inputValue.trim();
    if (!messageText) {
      return;
    }
    const newMessage = makeNewMessage(messageText);
    saveMessage(newMessage);
    setMessages(allMessages => [...allMessages, newMessage]);
    setInputValue('');
    setLastMessageId(newMessage.message_id);
    inputPalce.current?.focus();
  };

  const handleInputChange = (e) => setInputValue(e.target.value);
  const userPic = user?.avatar || DEFAULT_AVATAR;
  const chatUserName = user?.name ?? 'Unknown'
  const handleNavigate = () => navigate('/');  

  return (
    <div className={styles.chatContent}>
      <HeadBar
        userPic={user?.avatar ?? null}
        userName={user?.name ?? 'Unknown'}
        leftPlace={
          <ArrowBackIcon className={styles.arrow} sx={{ fontSize: 40 }} onClick= {handleNavigate} />
        }
        centerPlace={
          <div className={styles.userInfo}>
            <img src={userPic} className={styles.chatAvatar} alt="avatar" />
            <span className={styles.messenger}>{chatUserName}</span>
          </div>}
      />
      <main>
        <ul className={styles.messagePos} ref={messagesEndRef}>
          {messages.map(({ message_id, ...props }) => (
            <MakeMessage key={message_id}
              isLastMessage={message_id === lastMessageId}
              {...props} />
          ))}
        </ul>
      </main>
      <footer>
        <form onSubmit={handleSubmit} className={styles.messageForm}>
          <input
            type="text"
            className={styles.formInput}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Введите сообщение..."
          />
          <button className={styles.sendButton} type="submit">
            <SendIcon sx={{ fontSize: 36 }} />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatPage;
