import React, { useEffect, useState, useRef } from "react";
import styles from './ChatPage.module.scss';
import MakeMessage from "../../MakeMessage";
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getMessages, saveMessage } from "../../../service/messagesService.js";
import HeadBar from "../../HeadBar/HeadBar.jsx";
import { useParams, useNavigate } from 'react-router-dom';
import DEFAULT_AVATAR from '../../../../public/temp.png';
import { ROUTES } from "../../../routes.js";
import { useChatContext } from "../../../ChatContext.jsx";

const ChatPage = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  const { chat, user, loggedUser } = useChatContext(); 
  const [inputValue, setInputValue] = useState('');
  const inputPalce = useRef(null);
  const [lastMessageId, setLastMessageId] = useState(null);
  const [looggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();
  const pollingRef = useRef(null);
  const messagesEndRef = useRef(null);


  const fetchMessages = async () => {
    try {
      const response = await getMessages(chatId);
      const data = response.results;
      if (Array.isArray(data)) {
        const isNewMessage = 
          data.length > messages.length || 
          (data.length > 0 && data[data.length - 1].id !== lastMessageId);
  
        if (isNewMessage) {
          setMessages(data);
          setLastMessageId(data[data.length - 1].id);
        }
      } else {
        setMessages([]);
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  useEffect(() => {
    let timer = null;
  
    const beginPoll = async () => {
      try {
        await fetchMessages();
      } catch (error) {
        console.error(error);
      }
      timer = setTimeout(beginPoll, 1000); 
    };
  
    if (chatId) {
      beginPoll();
    }
  
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [chatId]);
  

useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

const makeNewMessage = (content) => {
          return {
            chat: chatId,
            text: content
          };
        }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const messageText = inputValue.trim();
    if (!messageText) return;

    const newMessage = makeNewMessage(messageText);

    try {
      const savedMessage = await saveMessage(newMessage);
      if (savedMessage) {
        savedMessage.sender = looggedUser;
        setMessages(allMessages => [...allMessages, savedMessage]);
        setLastMessageId(savedMessage.id);
        setInputValue('');
        inputPalce.current?.focus();
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };


  const handleInputChange = (e) => setInputValue(e.target.value);
  const userPic = chat?.avatar ?? DEFAULT_AVATAR
  const chatUserName = chat?.name ?? 'Chat'
  const handleNavigate = () => navigate(ROUTES.ROOT);

  return (
    <div className={styles.chatContent}>
      <HeadBar
        userPic={userPic} 
        userName={chatUserName}          
        leftPlace={
          <ArrowBackIcon className={styles.arrow} sx={{ fontSize: 40 }} onClick={handleNavigate} />
        }
        centerPlace={
          <div className={styles.userInfo}>
            <img src={chat?.avatar ?? DEFAULT_AVATAR} className={styles.chatAvatar} alt="avatar" />
            <span className={styles.messenger}>{chat?.title ?? 'Chat'}</span>
          </div>
        }
      />
      <main>
      <ul className={styles.messagePos} ref={messagesEndRef}>
          {Array.isArray(messages) && messages.map((message) => (
            <MakeMessage
              key={message.message_id}
              sender={message.sender?.username ?? 'Unknown'}
              text={message.text}
              time={message.time}
              isLastMessage={message.id === lastMessageId}
            />
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