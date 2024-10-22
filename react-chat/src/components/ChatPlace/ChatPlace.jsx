import React from 'react';
import './ChatPlace.css'
import DEFAULT_AVATAR from '../../../public/temp.png'

import DoneAllIcon from '@mui/icons-material/DoneAll';

const ChatPlace = ({chatId, avatar, name, lastMessage, time, isRead , onClick}) => {
    
    return (
        <div className='chat-place'
        onClick={() => onClick(chatId)}>
        <img src={avatar || DEFAULT_AVATAR} className='chat-image'/>
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
