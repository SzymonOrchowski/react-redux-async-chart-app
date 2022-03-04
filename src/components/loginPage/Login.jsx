import React from 'react';

const LoginPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const {username, password } = e.target.elements
        console.log(username.value, password.value)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div >
                        <span>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username"></input>
                        </span>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="password">Password:</label>
                            <input type="text" id="password" name="password"></input>
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