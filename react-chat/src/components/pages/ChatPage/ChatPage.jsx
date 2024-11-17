import React, { useEffect, useState, useRef } from "react";
import styles from './ChatPage.module.scss';
import MakeMessage from "../../MakeMessage";
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getMessages, saveMessage } from "../../../apiService/messages/messages.js"
import { getUser, getCurrentUser } from "../../../apiService/users/users.js";
import HeadBar from "../../HeadBar/HeadBar.jsx";
import { useParams, useNavigate } from 'react-router-dom';
import DEFAULT_AVATAR from '../../../../public/temp.png';
import { getChatById } from "../../../apiService/chats/chats.js";

const ChatPage = () => {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputPalce = useRef(null);
  const [lastMessageId, setLastMessageId] = useState(null);
  const [user, setUser] = useState(null);
  const [looggedUser, setLoggedUser] = useState(null);
  const [chat, setChat] = useState(null);
  const navigate = useNavigate();

<<<<<<< Updated upstream

  const messagesEndRef = useRef(null);
=======
  const [filesUpload, setFilesUpload] = useState([]);
  const [voiceUpload, setVoiceUpload] = useState(null);
  const [confirmFiles, setConfirmFiles] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const recorderRef = useRef(null);
  const [isNotified, setIsNotified] = useState(false);
  const pollingRef = useRef(null);



  const messagesEndRef = useRef(null);
  const notificationSound = useRef(new Audio(''));

  const getLocLink = (long, lat) => {
    return `https://www.openstreetmap.org/#map=18/${lat}/${long}`
  }

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  })


  const FileView = ({ files, onRemobe }) => {
    return (
      <div className={styles.previewContainer}>
        {files.map((image, index) => (
          <div key={index} className={styles.previewImageContainer}>
            <img src={image.url} alt={`preview`} className={styles.previewImage} />
            <button onClick={() => onRemobe(index)} className={styles.removeButton}>×</button>
          </div>
        ))}
      </div>
    )
  }
  const NotificationView = ({ message }) => {
    return (
      <div className={styles.notification}>
        <img src={message.sender.avatar || DEFAULT_AVATAR} alt="avatar" />
        <span>{`${message.sender.userName} ${message.text}`}</span>
      </div>
    );
  };

  const notifyMessage = (message) => {
    if (chatId !== message.chatId) {
      if (Notification.permission === "granted") {
        new Notification("У вас новое сообщение!", {
          body: `${message.sender.userName}  ${message.text}`,
          icon: message.sender.avatar || DEFAULT_AVATAR
        });
        setIsNotified(true);
      }
      // notificationSound.current.play();
    }
  }

  useEffect(() => {
    if (messages.length > 0) {
      const newMessage = messages[messages.length - 1];
      notifyMessage(newMessage);
    }
  }, [messages]);

>>>>>>> Stashed changes

  useEffect(() => {
    const loadChatData = async () => {
      const foundChat = await getChatById(chatId);
      const loggedUser = await getCurrentUser();
      setLoggedUser(loggedUser);
      setChat(foundChat);
      if (foundChat) {
        // ищем наших собеседников
        const otherUser = foundChat.members.find(
          (member) => member.id !== loggedUser.id
        );
        
        if (otherUser) {
          const foundUser = await getUser(otherUser.id);
          setUser(foundUser);
        }
      } else {
        navigate('/');
      }
    };
    loadChatData();
  }, [chatId, navigate]);

<<<<<<< Updated upstream
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getMessages(chatId);
        const data = response.results; 
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          setMessages([]);
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    
    fetchMessages();
=======

  const fetchMessages = async () => {
    try {
      const response = await getMessages(chatId);
      const data = response.results;
      if (Array.isArray(data)) {
        const lastFetchedMessage = data[data.length - 1];
        if (!lastMessageId || lastMessageId !== lastFetchedMessage.id) {
          setMessages(data);
          setLastMessageId(lastFetchedMessage.id);
        }
      } else {
        setMessages([]);
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const beginPoll = () => {
    pollingRef.current = setInterval(()=>{
      fetchMessages();
    }, 3000);
  }


  const endPoll = () => {
    if (pollingRef.current){
      clearInterval(pollingRef.current);
    }
  }


  useEffect(()=>{
    if(chatId){
      fetchMessages();
      beginPoll();
    }

    return () => {
      endPoll();
    };
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  const handleSubmit = async (event) => {
    event.preventDefault();
    const messageText = inputValue.trim();
    if (!messageText) return;

    const newMessage = makeNewMessage(messageText);
=======
      );
    }
  };

  const makeNewMessage = (content, files = [], voice = null,) => {
    return {
      chat: chatId,
      text: content,
      files,
      voice,
    };
  }
  const handleSubmit = async (event, options = {}) => {
    event.preventDefault();
    const { isLoc, locationData } = options;
    const messageText = inputValue.trim();
    if (!messageText && confirmFiles.length === 0 && !voiceUpload && !isLoc) return;
    const textContent = isLoc ? `Моя локация: ${getLocLink(locationData.longitude, locationData.latitude)}` : messageText;
    const newMessage = makeNewMessage(
      textContent,
      confirmFiles,
      voiceUpload);
>>>>>>> Stashed changes

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
  const handleNavigate = () => navigate('/');

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
<<<<<<< Updated upstream
          <button className={styles.sendButton} type="submit">
            <SendIcon sx={{ fontSize: 36 }} />
          </button>
=======
          <div className={styles.buttons}>
            <button type="button" className={styles.cameraIcon} onClick={() => document.getElementById('fileUpload').click()}>
              <CameraAltIcon sx={{ fontSize: 36 }} />
            </button>
            <input
              type="file"
              id="fileUpload"
              multiple
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFiles}
            />
            <button onClick={isRecording ? stopRecording : handleRecording} className={styles.micIcon}>
              {isRecording ? <StopIcon sx={{ fontSize: 36 }} /> : <MicIcon sx={{ fontSize: 36 }} />}
            </button>
            <button type="button" className={styles.locatonIcon} onClick={sendLocation}>
              <LocationOnIcon sx={{ fontSize: 36 }} />
            </button>
            <button className={styles.sendButton} type="submit">
              <SendIcon sx={{ fontSize: 36 }} />
            </button>
          </div>
>>>>>>> Stashed changes
        </form>
      </footer>
    </div>
  );
};

export default ChatPage;
