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
import ModalWindow from "../../ModalWindow/ModalWindow.jsx";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import LocationOnIcon from '@mui/icons-material/LocationOn';


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

  const [filesUpload, setFilesUpload] = useState([]);
  const [voiceUpload, setVoiceUpload] = useState(null);
  const [confirmFiles, setConfirmFiles] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const recorderRef = useRef(null);


  const messagesEndRef = useRef(null);

  const getLocLink = (long, lat) => {
    return `https://www.openstreetmap.org/#map=18/${lat}/${long}`
  }


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


  useEffect(() => {
    const loadChatData = async () => {
      const foundChat = await getChatById(chatId);
      const loggedUser = await getCurrentUser();
      setLoggedUser(loggedUser);
      setChat(foundChat);
      if (foundChat) {
        // ищем наших собеседников
        const otherUser = foundChat.members.find(
          (member) => member.username !== loggedUser.username
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
  }, [chatId]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  const sendLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleSubmit(new Event("submit"), {
            isLoc: true,
            locationData: { latitude, longitude }
          });
        },
        (error) => {
          console.error("Ошибка при получении координат:", error);
        }
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
    debugger;
    event.preventDefault();
    const {isLoc, locationData} = options;
    const messageText = inputValue.trim();
    if (!messageText && confirmFiles.length === 0 && !voiceUpload &&!isLoc) return;
    const textContent = isLoc? `Моя локация: ${getLocLink(locationData.longitude, locationData.latitude)}` : messageText;
    const newMessage = makeNewMessage(
      textContent,
      confirmFiles, 
      voiceUpload);

    try {
      const savedMessage = await saveMessage(newMessage, confirmFiles, voiceUpload);
      if (savedMessage) {
        savedMessage.sender = looggedUser;
        setMessages(allMessages => [...allMessages, savedMessage]);
        setLastMessageId(savedMessage.id);
        setInputValue('');
        setConfirmFiles([]);
        setVoiceUpload(null);
        setIsRecording(false);
        inputPalce.current?.focus();
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

  const handleFiles = (event) => {
    const files = Array.from(event.target.files).slice(0, 5).map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setFilesUpload((prevFiles) => [...prevFiles, ...files]);
  };
  const handleConfirmFiles = () => {
    setConfirmFiles([...filesUpload]);
    setFilesUpload([]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files).slice(0, 5);
    setFilesUpload(files);
  };

  const handleDrag = (event) => event.preventDefault();

  const removeFile = (id) => {
    setFilesUpload((prevFiles) => {
      const newFiles = prevFiles.filter((_, i) => i !== id);
      URL.revokeObjectURL(prevFiles[id].url);
      return newFiles;
    });
  };

  const handleRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRec = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      recorderRef.current = mediaRec;
      const audioChunks = [];
      mediaRec.ondataavailable = (event) => audioChunks.push(event.data);

      mediaRec.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
        setVoiceUpload(audioBlob);
        setIsRecording(false);
      };
      mediaRec.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };


  const stopRecording = () => {
    recorderRef.current.stop();
  }
  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter' && !isRecording) {
      handleSubmit(event);
    }
  };

  const handleInputChange = (e) => setInputValue(e.target.value);
  const userPic = chat?.avatar ?? DEFAULT_AVATAR
  const chatUserName = chat?.name ?? 'Chat'
  const handleNavigate = () => navigate('/');

  return (
    <div className={styles.chatContent}
      onDrop={handleDrop}
      onDragOver={handleDrag}>
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
              images={message.files.map((file) => file.item)}
              voice={message.voice}
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
            onKeyDown={handleInputKeyPress}
            placeholder="Введите сообщение..."
          />
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
        </form>
        {filesUpload?.length > 0 && (
          <ModalWindow
            title="Предварительный просмотр"
            onClose={() => setFilesUpload([])}
            onConfirm={handleConfirmFiles}>
            <FileView files={filesUpload} onRemobe={removeFile} />
          </ModalWindow>
        )}
      </footer>
    </div>
  );
};

export default ChatPage;
