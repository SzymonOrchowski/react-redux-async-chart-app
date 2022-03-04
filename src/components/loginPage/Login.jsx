import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div >
                        <span>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" onChange={handleUsernameChange}></input>
                        </span>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="password">Password:</label>
                            <input type="text" id="password" name="password" onChange={handlePasswordChange}></input>
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
        </div>
    );
};

export default LoginPage;