import React from 'react';
import { selectUser, logout } from '../../features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Header = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    return (
        <div>
            <Navbar id='navbar' fixed='top' className="d-flex justify-content-between px-4">
                <div>
                    Dashboard
                </div>
                <div>
                    {user.username}
                    <Button className='ms-3' onClick={handleLogout}>LogOut</Button>
                </div>    
            </Navbar>
        </div>
    );
};

export default Header;