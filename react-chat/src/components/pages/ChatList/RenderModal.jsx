import React, { useState, useEffect } from 'react';
import ModalWindow from '../../ModalWindow/ModalWindow';
import Search from '../../Search/Search';
import EditInput from '../../EditInput/EditInput';
import { getUsers } from "../../../service/usersService.js";
import { saveChat } from "../../../service/chatsService.js";
import styles from './RenderModal.module.scss';


const RenderModal = (props) => {
  const {
    isOpen,
    onClose,
    onChat
  } = props;

  const [newChatTitle, setNewChatTitle] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const loadUsers = async () => {
      setIsLoadingUsers(true);
      try {
        const userinfo = await getUsers({ search: userSearch, page: 1, page_size: 20 });
        setUsers(userinfo?.results || []);
      } catch (error) {
        console.error('Error fetching ursers:', error);
      } finally {
        setIsLoadingUsers(false);
      }
    };
    loadUsers();
  }, [userSearch, isOpen]);


  const handleAddChat = async () => {
    if (!selected) {
      alert("Пользователь не найден!");
      return;
    }
    try {
      const newChatData = {
        members: [selected],
        is_private: true,
        title: newChatTitle,
      };
      const createdChat = await saveChat(newChatData);
      if (createdChat) {
        onChatCreated(createdChat);
        onClose();
      } else {
        alert("Не удалось создать чат");
      }
    } catch (error) {
      alert("Не удалось создать чат");
    }
  };

  const handleTitle =(value) =>{
    setNewChatTitle(value);
  }

  const handleSearch =(value) =>{
    setUserSearch(value);
  }

  return (
    <ModalWindow title="Создать новый чат" onClose={onClose}>
      <div>
        <EditInput
          labelName="Название чата"
          value={newChatTitle}
          onChange={handleTitle}
          readOnly={false}
        />
        <EditInput
          labelName="Username пользователя"
          value={userSearch}
          onChange={handleSearch}
          readOnly={false}
        />
        {isLoadingUsers ? (
          <p> Загрузка пользователей...</p>
        ) :
          (<Search
            users={users}
            selected={selected}
            setSelected={setSelected} />)}
        <button onClick={handleAddChat} className={styles.createButton}>
          Создать
        </button>
      </div>
    </ModalWindow>
  )
}


export default RenderModal;