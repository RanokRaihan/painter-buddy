import React, { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { adminContext, userContext } from '../../App';

import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [navClass, setNavClass] = useState('nav-hidden');
    const handleNav = () => {
        if (navClass === 'nav-hidden') {
            setNavClass('nav-show')
        }
        else {
            setNavClass('nav-hidden')
        }
    }
    const history = useHistory();
    const handleNavDirection = direction => {
        history.push(direction);
        setNavClass('nav-hidden')
    }
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useContext(adminContext);

    const logOut = () => {
        setLoggedInUser({
            isSignedIn: false,
            userName: '',
            email: '',
            picture: ''
        })
        setIsAdmin(false);
        sessionStorage.clear()

    }
    return (
        <div className='main-header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className={navClass}>
                <ul className='nav-items'>
                    <li onClick={() => handleNavDirection('/')}>Home</li>
                    <li onClick={() => handleNavDirection('/allService')}>Services</li>
                    <li onClick={() => handleNavDirection('/contact')}>Contact us</li>
                    <li onClick={() => handleNavDirection('/reviews')}>Reviews</li>
                    {
                        !isAdmin && <li onClick={() => handleNavDirection('/dashboard')}>Dashboard</li>
                    }

                    {
                        loggedInUser.isSignedIn && isAdmin && <li onClick={() => handleNavDirection('/admin')}>Admin</li>
                    }


                    {
                        loggedInUser.isSignedIn ?
                            <div className="logout-container">
                                <button onClick={logOut} className="btn btn-primary btn-logout">LogOut</button>
                                <div className="user-image">
                                    <img src={loggedInUser.picture} alt="" />
                                </div>

                            </div>

                            :
                            <button onClick={() => handleNavDirection('/login')} className='btn btn-primary'> Log in</button>
                    }


                </ul>
            </nav>
            <div className={navClass === 'nav-hidden' ? 'nav-burger' : 'nav-burger burger-fixed'} onClick={handleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div >
    );
};

export default Header;