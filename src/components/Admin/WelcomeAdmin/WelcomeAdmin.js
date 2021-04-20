import React, { useContext } from 'react';
import { userContext } from '../../../App';
import './WelcomeAdmin.css'

const WelcomeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div>
            <h1 className="text-title text-large text-center my-5">Welcome, {loggedInUser.userName} </h1>
            <h2 className="my-5 text-center">This is your admin panel</h2>
        </div>
    );
};

export default WelcomeAdmin;