
import React from 'react';
import ModalWindow from '../../ModalWindow/ModalWindow';
import Search from '../../Search/Search';
import EditInput from '../../EditInput/EditInput';
import styles from './RenderModal.module.scss';
  
  const RenderModal = (props) => {
    const {
      isOpen, 
      onClose, 
      newChatTitle, 
      setNewChatTitle, 
      userSearch, 
      setUserSearch, 
      users, 
      selected, 
      setSelected, 
      isLoadingUsers, 
      handleAddChat 
    } = props;
    if (!isOpen) return null;
    return(
      <ModalWindow title="Создать новый чат" onClose={onClose}>
          <div>
            <EditInput
              labelName="Название чата"
              value={newChatTitle}
              onChange={(value) => setNewChatTitle(value)}
              readOnly={false}
            />
            <EditInput
              labelName="Username пользователя"
              value={userSearch}
              onChange={(value) => setUserSearch(value)}
              readOnly={false}
            />
            {isLoadingUsers ? (
              <p> Загрузка пользователей...</p>
            ) :
              (<Search 
                users={users} 
                selected={selected} 
                setSelected={setSelected}/>)}
            <button onClick={handleAddChat} className={styles.createButton}>
              Создать
            </button>
          </div>
        </ModalWindow>
    )
  }


  export default RenderModal;