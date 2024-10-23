
export const USERS = [
    { id: '1', name: 'User 1', avatar: '' },
    { id: '2', name: 'User 2', avatar: '' },
    { id: '3', name: 'User 3', avatar: '' }
]



export const getByID = (id) => {
    return USERS.find(user => user.id === id)
};

export const getAll = () => {
    return USERS
}
