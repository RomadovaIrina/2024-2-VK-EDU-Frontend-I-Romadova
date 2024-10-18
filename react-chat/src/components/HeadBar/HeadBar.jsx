import React from 'react';
import './HeadBar.css';
import DEFAULT_AVATAR from '../../../public/temp.png';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const HeadBar = ({ isChatOpen, isChatList, goBackToChatList, userPic, userName = "Unknown" }) => {
    return (
        <header className='top-bar'>
            {isChatOpen ? (
                <>
                    <ArrowBackIcon
                        className="menu-icon"
                        onClick={goBackToChatList}
                    />
                    <div className='user-info'>
                        <img src={userPic || DEFAULT_AVATAR} className='chat-avatar' alt='avatar' />
                        <span className='messenger'>{userName}</span>
                    </div>
                </>
            ) : isChatList ? (
                <>
                   <MenuIcon className="menu-icon" />
                    <span className='messenger'>Messenger</span>
                    <SearchIcon className="search-icon" />
                </>
            ) : null}
        </header>
    );
};

export default HeadBar;
