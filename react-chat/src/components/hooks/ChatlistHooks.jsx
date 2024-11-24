import { useState, useEffect, useRef } from "react";
import { getChats } from "../../service/chatsService";

const ChatListHooks = () => {
    const [chats, setChats] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    const [search, setSearch] = useState("");

    

    const loadChats = async (search = '', pageSize = 10, page = 1) => {
        try {
          const chatBox = await getChats({ search, page, page_size: pageSize });
          if (chatBox) {
            setChats(chatBox.results || []);
          } else {
            console.error("Chat data not loaded");
          }
        } catch (error) {
          console.error("Error fetching chats:", error);
        }
      };
    
    
      useEffect(() => {
        loadChats(search, pageSize, page);
      }, [page, search]);
    
      
      useEffect(() => {
        let timer = null;
        const beginPoll = async() =>{
            await loadChats(search, pageSize, page);
            timer = setTimeout(beginPoll, 10000);
        };

        beginPoll();

        return () => {
          if(timer){
            clearTimeout(timer);
          }
        }
      }, [search, pageSize, page]);

      return {
        chats,
        search,
        setSearch,
        setChats,
        page,
        setPage,
        pageSize,
        loadChats,}

};

export default ChatListHooks;