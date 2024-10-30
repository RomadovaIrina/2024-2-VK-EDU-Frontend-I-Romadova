const getUser = (userId) => {
    return JSON.parse(localStorage.getItem(`user_${userId}`));
}

const saveUser = (userId, userData) => {
    localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
  };

const initUsers =(users) => {
  localStorage.setItem('users', JSON.stringify(users));
}

export {getUser, saveUser, initUsers};