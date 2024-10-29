const getUser = (userId) => {
    return JSON.parse(localStorage.getItem(`user_${userId}`));
}

const saveUser = (userId, userData) => {
    localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
  };


export {getUser, saveUser};