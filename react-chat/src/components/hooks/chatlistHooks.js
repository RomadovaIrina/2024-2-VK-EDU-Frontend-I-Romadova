import { useState, useEffect, useRef } from "react";
import { getChats } from "../../apiService/chats/chats";


const chatListHooks = () => {
    const [chats, setChats] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    const [search, setSearch] = useState("");
    const pollingRef = useRef(null);

    

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
    
      const beginPoll = async () => {
          await loadChats();
        pollingRef.current = setTimeout(beginPoll, 1000);
      };
      
      const endPoll = () => {
        if (pollingRef.current) {
          clearTimeout(pollingRef.current);
          pollingRef.current = null;
        }
      };
      
      useEffect(() => {
        beginPoll();
        return endPoll;
      }, []);

      return {
        chats,
        search,
        setSearch,
        page,
        setPage,
        pageSize,
        loadChats,}

};

export default chatListHooks;