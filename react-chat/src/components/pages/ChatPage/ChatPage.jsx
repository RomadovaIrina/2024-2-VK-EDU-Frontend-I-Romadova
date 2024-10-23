import React from "react";
import { useEffect, useState, useRef } from "react";

import './ChatPage.css'
import MakeMessage from "../../MakeMessage";

import { getByID} from "../../../mockUsers.js"

import SendIcon from '@mui/icons-material/Send'


const ChatPage = ({ chatId, userId, goToChatList }) => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const user = getByID(userId)
    const inputFocus = useRef(null);
    const [lastMessageId, setLastMessageId] = useState(null);
    const messagesEndRef = useRef(null);


    const saveMessage = (messages) => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    };

    const getAllMessages = () => {
        return JSON.parse(localStorage.getItem('chatMessages')) || [];
    }

    const getMessages = (chatId) => {
        const allMessages = getAllMessages();
        return allMessages.filter(message => message.chatId === chatId);
    };

    useEffect(() => {
        const loadedMessages = getMessages(chatId)
        setMessages(loadedMessages);
    }, [chatId])

    useEffect(() => {
        messagesEndRef?.current.scrollIntoView();
    }, [messages]);


    const makeNewMessage = (content) => {
        const messageTime = new Date().toLocaleString();
        const messageData = {
            message_id: Date.now(),
            chatId: chatId,
            sender: user?.user.name ?? 'Unknown',
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
        const messageData = makeNewMessage(messageText);
        const updatedMessages = [...messages, messageData];
        saveMessage(updatedMessages);
        setMessages(updatedMessages);
        setInputValue('');
        setLastMessageId(messageData.message_id);
        if (inputFocus.current) {

            inputFocus.current.focus();
        }
    };


    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleOnClick = (event) => {
        if (event.key === 'Enter') handleSubmit(event);
    }

    return (
        <div className="chat-content">
            <main>
                <ul className="ui">
                    {messages.map(({ sender, text, time, message_id }, index) => (
                        <MakeMessage key={index} sender={sender} text={text} time={time} isLastMessage={message_id === lastMessageId} />
                    ))}

                    <div ref={messagesEndRef} />
                </ul>

            </main>
            <footer>
                <form onSubmit={handleSubmit} className="message-form">
                    <input
                        type="text"
                        autoFocus
                        className="form-input"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Введите сообщение..."
                        onKeyDown={handleOnClick}
                    />
                    <button className="sendButton pulse" type="submit">
                        <SendIcon sx={{ fontSize: 36 }} />
                    </button>
                </form>
            </footer>
        </div>
    );



};


export default ChatPage;