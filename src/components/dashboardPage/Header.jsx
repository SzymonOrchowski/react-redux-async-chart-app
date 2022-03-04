import React from 'react';
import { userLogout, selectUser } from '../../ducks/user';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Header = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(userLogout())
    }

    return (
        <div>
            <Navbar id='navbar' fixed='top' className="d-flex justify-content-between px-4">
                <div>
                    Dashboard
                </div>
                <div>
                    {user}
                    <Button className='ms-3' onClick={handleLogout}>LogOut</Button>
                </div>    
            </Navbar>
        </div>
    );
};

export default Header;