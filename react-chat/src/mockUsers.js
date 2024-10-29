
export const USERS = [
    { id: '1', name: 'User 1', username:"u1", avatar: '', description:"some details" },
    { id: '2', name: 'User 2', username:"u2", avatar: '', description:"no suprises"},
    { id: '3', name: 'User 3', avatar: '' }
]



export const getByID = (id) => {
    return USERS.find(user => user.id === id)
};

export const getAll = () => {
    return USERS
}
