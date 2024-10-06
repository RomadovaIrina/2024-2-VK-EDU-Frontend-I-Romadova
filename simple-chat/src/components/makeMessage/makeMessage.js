const makeMessage = ({sender, text, time}) => {
    const elemnt_part = document.createElement('li');
    elemnt_part.classList.add('message');

    const messageHeader = document.createElement('div');
    messageHeader.classList.add('message-header');
    messageHeader.textContent = sender;

    const messageBody = document.createElement('div');
    messageBody.classList.add('message-body');
    messageBody.textContent = text;

    const messageFooter = document.createElement('div');
    messageFooter.classList.add('message-footer');
    messageFooter.textContent = `${time}`;

    elemnt_part.appendChild(messageHeader);
    elemnt_part.appendChild(messageBody);
    elemnt_part.appendChild(messageFooter);

    return elemnt_part;

};

export default makeMessage;