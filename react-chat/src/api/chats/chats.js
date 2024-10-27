const getChats = () => {
    return JSON.parse(localStorage.getItem("chats")) || [];
  };
  const saveChats = (chats) => {
    localStorage.setItem("chats", JSON.stringify(chats));
  };



export{ getChats, saveChats};