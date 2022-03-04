import React from 'react';
import { selectUser, logout } from '../../features/userSlice';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    return (
        <div>
            <div>
                <div>
                    Dashboard
                </div>
                <div>
                    Welcome {user.username}
                </div>
            </div>
            <div>
                <button onClick={handleLogout}>LogOut</button>
            </div>   
        </div>
    );
};

export default Header;