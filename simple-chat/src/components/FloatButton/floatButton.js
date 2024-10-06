import './floatingButton.css';

const FloatingButton = () => {
    const button = document.createElement('button');
    button.classList.add('floating-button');

    const icon = document.createElement('span');
    icon.classList.add('material-icons');
    icon.textContent = 'edit';

    button.appendChild(icon);

    return button;
};

export default FloatingButton;
