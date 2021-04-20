import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import Admin from './components/Admin/Admin/Admin';
import ContactUs from './components/Home/ContactUs/ContactUs';
import PrivateRoute from './components/PrivetRoute/PrivetRoute'
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import AllServices from './components/AllServices/AllServices';
import PrivetAdminRoute from './components/PrivateAdminRoute/PrivateAdminRoute';
import AllReviews from './components/AllReviews/AllReviews';

export const userContext = createContext();
export const adminContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    userName: '',
    email: '',
    picture: ''
  })
  const [isAdmin, setIsAdmin] = useState(false);
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
    }
    if (sessionStorage.getItem('isAdmin')) {
      setIsAdmin(true)
    }
  }, [])

  return (

    <adminContext.Provider value={[isAdmin, setIsAdmin]}>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path='/bookService/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivetAdminRoute path='/admin'>
              <Admin></Admin>
            </PrivetAdminRoute>
            <Route path='/contact'>
              <ContactUs></ContactUs>
            </Route>
            <Route path='/allService'>
              <AllServices></AllServices>
            </Route>
            <Route path='/allReviews'>
              <AllReviews></AllReviews>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </adminContext.Provider>

  );
};

export default App;