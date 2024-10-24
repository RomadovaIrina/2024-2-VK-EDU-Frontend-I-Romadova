import React from 'react';
import './ChatPlace.css'
import DEFAULT_AVATAR from '../../../public/temp.png'

import DoneAllIcon from '@mui/icons-material/DoneAll';

const ChatPlace = (props) => {
    const {
        chatId,
        avatar = DEFAULT_AVATAR,
        name,
        lastMessage,
        time,
        isRead,
        onClick,
    } = props;

    const userPicture = avatar || DEFAULT_AVATAR;

    return (
        <div className='chat-place'
            onClick={() => onClick(chatId)}>
            <img src={userPicture} className='chat-image' />
            <div className='chat-components'>
                <div className='chat-name'>{name}</div>
                <div className='last-sent'>{lastMessage}</div>
                <div className='chat-footer'>
                    <div className='chat-time'>{time}</div>
                    {isRead &&
                        <DoneAllIcon className="read-status read" style={{ color: 'green' }} />}
                </div>
            </div>
        </div>
    );
};

export default ChatPlace;
