import React, { useState } from 'react';
import { login } from "../../features/userSlice"
import { useDispatch } from 'react-redux';
import users from '../../data/usersData.json'
import { Form, Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const validateUser = (username, password) => {
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
        <>
            <div className="loginPage">
                <Form id="loginForm" className="rounded p-4" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Button type='submit' value="Submit">Login</Button>
                        <Button type='reset' value="Reset" onClick={(e) => {
                            setUsername(''); 
                            setPassword('')}}>
                                Reset
                        </Button>
                    </div>
                </Form>
            </div>

            <Modal show={error}>
                <Modal.Header>
                    <Modal.Title>
                        Error
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Wrong username or password
                    </p>
                </Modal.Body>
                <Button variant='primary' onClick={(e) => {setError(false)}}>Close</Button>
            </Modal>
        </>

    );
};

export default LoginPage;