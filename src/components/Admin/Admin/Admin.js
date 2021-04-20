import React from 'react';
import './Admin.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import OrderList from '../OrderList/OrderList';
import AddService from '../AddService/AddService';
import ManageService from '../ManageService/ManageService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPlus, faTasks, faUserLock } from '@fortawesome/free-solid-svg-icons';
import WelcomeAdmin from '../WelcomeAdmin/WelcomeAdmin';


const Admin = () => {
    const { path, url } = useRouteMatch();

    return (
        <div className='admin-row'>
            <div className="admin-nav side-bar">
                <h2 className="text-title">Admin Panel</h2>
                <ul>
                    <li>
                        <Link to={`${url}/orderList`}>
                            <FontAwesomeIcon className='side-icon' icon={faClipboardList}></FontAwesomeIcon>  Order List
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/addService`}>
                            <FontAwesomeIcon className='side-icon' icon={faPlus}></FontAwesomeIcon>  Add Service
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/manageService`}>
                            <FontAwesomeIcon className='side-icon' icon={faTasks}></FontAwesomeIcon>  Manage Service
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/makeAdmin`}>
                            <FontAwesomeIcon className='side-icon' icon={faUserLock}></FontAwesomeIcon>  Make Admin
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="admin-content ">
                <Switch>
                    <Route exact path={path}>
                        <WelcomeAdmin></WelcomeAdmin>
                    </Route>
                    <Route path={`${path}/orderList`}>
                        <OrderList></OrderList>
                    </Route>
                    <Route path={`${path}/addService`}>
                        <AddService></AddService>
                    </Route>
                    <Route path={`${path}/manageService`}>
                        <ManageService></ManageService>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Admin;