export const USERS = [
    {id: '1', name: 'User 1', avatar: ''},
    {id: '2', name: 'User 2', avatar: ''},
    {id: '3', name: 'User 3', avatar: ''}
]
localStorage.setItem('users', JSON.stringify(USERS));
export const getByID = (id) => {
    return USERS.find(user => user.id === id)
};

export const getAll = () => {
    return USERS
}

export const initializeUsers = () => {
    localStorage.setItem('users', JSON.stringify(USERS));
  };