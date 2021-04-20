import React, { useContext, useEffect } from 'react';
import './Login.css';
import logo from '../../images/logo.png'

//firebase login import 

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { adminContext, userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import jwt_decode from "jwt-decode";

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    //change title
    const provider = new firebase.auth.GoogleAuthProvider();
    //context
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useContext(adminContext);

    //for redirect

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: '/dashboard' } };


    //sign in function
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            var token = sessionStorage.getItem('token');
            var decoded = jwt_decode(token);
            const user = {
                isSignedIn: true,
                userName: decoded.name,
                email: decoded.email,
                picture: decoded.picture
            }
            setLoggedInUser(user)
            if (sessionStorage.getItem('isAdmin')) {
                setIsAdmin(true)
            }
            if (isAdmin) {
                history.replace({ pathname: '/admin' });
            }
            else {
                history.replace(from)
            }

        }
    }, [])


    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                const { name, email, picture } = result.additionalUserInfo.profile
                varifyAdmin(email)
                const signedInUser = {
                    isSignedIn: true,
                    userName: name,
                    email: email,
                    picture: picture
                }
                setLoggedInUser(signedInUser);

                getToken();
                console.log(from);
                history.replace(from);
            })
            .catch(error => alert(error))


    }

    const getToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then((idToken) => {
                sessionStorage.setItem('token', idToken)
            }).catch(function (error) {
                // Handle error
            });
    }

    async function varifyAdmin(email) {
        const response = await fetch(`https://peaceful-anchorage-19075.herokuapp.com/varifyAdmin/${email}`);
        const result = await response.json();
        setIsAdmin(result);
        if (result) {
            sessionStorage.setItem('isAdmin', result)
        }


    }

    return (
        <div className='container'>
            {
                isAdmin && <h2 className="text-title my-5 text-center">You have logged in as a Admin</h2>
            }
            <div className="login-wrapper">
                <img src={logo} alt="" />
                <h1 className="text-center">You must login first</h1>
                <button onClick={handleSignIn} className="btn btn-primary btn-center">Log in with google</button>
            </div>

        </div>
    );
};

export default Login;