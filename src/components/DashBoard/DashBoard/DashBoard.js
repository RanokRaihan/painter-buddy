import { faClipboardList, faComment, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
// import { userContext } from '../../../App';
import AddReview from '../AddReview/AddReview';
import BookingList from '../BookingList/BookingList';
import './DashBoard.css';

const DashBoard = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(userContext);
    let { path, url } = useRouteMatch();

    return (
        <div className='dashboard-row '>
            <div className="dashboard-nav side-bar">
                <h2 className='text-title'>User Dashboard</h2>
                <ul>
                    <li>
                        <Link to={`${url}/bookingList`}> <FontAwesomeIcon className='side-icon' icon={faClipboardList}></FontAwesomeIcon> Booking List</Link>
                    </li>
                    <li>
                        <Link to={`${url}/review`}> <FontAwesomeIcon className='side-icon' icon={faCommentAlt}></FontAwesomeIcon> Review</Link>
                    </li>
                </ul>
            </div>
            <div className="dashboard-content">
                <Switch>
                    <Route exact path={path}>
                        <BookingList></BookingList>
                    </Route>
                    <Route path={`${path}/bookingList`}>
                        <BookingList></BookingList>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default DashBoard;