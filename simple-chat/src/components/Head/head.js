import './head.css';
import defaultAvatar from '../../temp_image/temp.png';

const Head = (isChatOpen, isChatList, userPic, userName = "Unknown") => {
    const head = document.createElement('header');
    head.classList.add('top-bar');

    const menuIcon = document.createElement('span');
    menuIcon.classList.add('material-icons', 'menu-icon');
    menuIcon.textContent = isChatOpen ? 'arrow_back' : 'menu'; 
    
    const title = document.createElement('span');
    title.classList.add('messenger');
    title.textContent = isChatOpen ? userName : 'Messenger';
    
    const searchIcon = document.createElement('span');
    searchIcon.classList.add('material-icons', 'search-icon');
    searchIcon.textContent = 'search';
    
    head.appendChild(menuIcon);
    if (isChatOpen) {
        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');

        const avatarImg = document.createElement('img');
        avatarImg.src = userPic || defaultAvatar;
        avatarImg.classList.add('chat-avatar'); 

        const title = document.createElement('span');
        title.classList.add('messenger');
        title.textContent = userName;

        // Вставляем аватарку и имя в обертку
        userInfo.appendChild(avatarImg);
        userInfo.appendChild(title);
        head.appendChild(userInfo);

        menuIcon.addEventListener('click', isChatList);
    }
    // head.appendChild(title);
    head.appendChild(searchIcon);

    return head;
};

export default Head;

