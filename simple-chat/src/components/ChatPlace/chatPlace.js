import './chatPlace.css';
import defaultAvatar from '../../temp_image/temp.png';

const ChatPlace = ({chat_id, avatar, name, lastMessage, time, isRead }) => {
    const chat = document.createElement('li');
    chat.classList.add('chat-place');

    const chatImage = document.createElement('img');
    chatImage.src = avatar || defaultAvatar;
    chatImage.classList.add('chat-image');

    const chatComponents = document.createElement('div');
    chatComponents.classList.add('chat-components');

    const chatName = document.createElement('div');
    chatName.classList.add('chat-name');
    chatName.textContent = name;

    const chatLastSent = document.createElement('div');
    chatLastSent.classList.add('last-sent');
    chatLastSent.textContent = lastMessage;

    const chatFooter = document.createElement('div');
    chatFooter.classList.add('chat-footer');

    const chatTime = document.createElement('div');
    chatTime.classList.add('chat-time');
    chatTime.textContent = time;

    chat.appendChild(chatImage);
    chat.appendChild(chatComponents);
    chatFooter.appendChild(chatTime);
    chatComponents.appendChild(chatName);
    chatComponents.appendChild(chatLastSent);
    
    if (isRead) {
        const check = document.createElement('span');
        check.classList.add('material-icons', 'read-status', 'read');
        check.textContent = 'done_all';
        chatFooter.appendChild(check);
    }

    chatComponents.appendChild(chatFooter);

    // Добавляем обработчик клика для перехода в чат
    chat.addEventListener('click', () => {
        window.location.href = `index.html?chat_id=${chat_id}`;
    });

    return chat;
};

export default ChatPlace;
