import users from '../data/usersData.json'

export const validateUser = (username, password) => {
    const found = users.users.find(user => user.username === username)
    if (found) {
        if (found.password === password) {
            return true
        } else {
            return false
        }   
    } else {
        return false
    }
}