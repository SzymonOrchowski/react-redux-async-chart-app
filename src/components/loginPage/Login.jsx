import React, { useState } from 'react';
import { login } from "../../features/userSlice"
import { useDispatch } from 'react-redux';
import users from '../../data/usersData.json'

const validateUser = (username, password) => {
    const found = users.users.find(user => user.username === username)
    if (found) {
        return true
    } else {
        return false
    }
}

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateUser(username, password)) {
            dispatch(login({
                username: username,
                password: password,
                loggedIn: true
            }))
        } else {
            setError(true)
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div >
                        <span>
                            <label htmlFor="username">Username:</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="Username" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}></input>
                        </span>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="password">Password:</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}></input>
                        </span>
                    </div>
                    <div>
                        <span>
                            <button type="submit">Login</button>
                            <input type="reset" value="Clear"/>
                        </span>
                    </div>
                </form>
            </div>
            <div>
                {
                error 
                ? 
                    <div>
                        <h3>Incorrect login data</h3>
                    </div>
                :
                    null
                }
            </div>
        </div>
    );
};

export default LoginPage;