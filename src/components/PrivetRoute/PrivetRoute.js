import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { adminContext, userContext } from '../../App';




const PrivetRoute = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useContext(adminContext);


    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.isSignedIn && !isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;