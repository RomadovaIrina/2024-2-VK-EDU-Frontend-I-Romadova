import './head.css';

const Head = (isChatOpen, isChatList) => {
    const head = document.createElement('div');
    head.classList.add('top-bar');

    const menuIcon = document.createElement('span');
    menuIcon.classList.add('material-icons', 'menu-icon');
    menuIcon.textContent = isChatOpen ? 'arrow_back' : 'menu'; 
    if (isChatOpen) {
        menuIcon.addEventListener('click', isChatList);
    }

    const title = document.createElement('span');
    title.classList.add('messenger');
    title.textContent = isChatOpen ? 'Here will be username' : 'Messenger';

    const searchIcon = document.createElement('span');
    searchIcon.classList.add('material-icons', 'search-icon');
    searchIcon.textContent = 'search';

    head.appendChild(menuIcon);
    head.appendChild(title);
    head.appendChild(searchIcon);

    return head;
};

export default Head;
