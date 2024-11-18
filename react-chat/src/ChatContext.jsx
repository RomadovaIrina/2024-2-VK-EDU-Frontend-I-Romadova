import React, { Children } from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { getChatById } from "./service/chatsService";
import { getCurrentUser } from "./service/usersService";

const ChatContext = createContext();

const useChatContext = () => {
    return useContext(ChatContext);
}

const ChatWrapper = ({children, chatId}) => {
    const [chat, setChat] = useState(null);
    const [user, setUser] = useState(null);
    const [loggedUser, setLoggedUser] = useState(null);
  
    useEffect(() => {
      const loadChatData = async (chatId) => {
        const foundChat = await getChatById(chatId);
        const loggedUser = await getCurrentUser();
        setLoggedUser(loggedUser);
        setChat(foundChat);
        
        const otherUser = foundChat.members.find(
          (member) => member.id !== loggedUser.id
        );
        if (otherUser) {
          setUser(otherUser);
        }
      };

      if (chatId) {
        loadChatData(chatId);
      }
    }, []);
    return (
        <ChatContext.Provider value={{ chat, user, loggedUser, setChat }}>
          {children}
        </ChatContext.Provider>
      );
}

export {useChatContext, ChatWrapper};