import React from 'react';
import './HeadBar.css';
import DEFAULT_AVATAR from '../../../public/temp.png';

const HeadBar = ({ leftPlace, centerPlace, rightPlace, userPic, userName }) => {
    const userPicture = userPic || DEFAULT_AVATAR;
    return (
        <header className='top-bar'>
            <div className='left-place'>{leftPlace}</div>
            <div className='center-place'>
                {centerPlace || (
                    <div className="user-info">
                        <img src={userPicture} className="chat-avatar" alt="avatar" />
                        <span className="messenger">{userName}</span>
                    </div>
                )}
            </div>
            <div className='right-place'>{rightPlace}</div>
        </header>
    );
};
export default HeadBar;
