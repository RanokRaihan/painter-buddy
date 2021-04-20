import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import BookingListCard from '../BookingListCard/BookingListCard';
import './BookingList.css';
import spinner from '../../../images/spinner.gif'

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [userOrder, setUserOrder] = useState([]);
    const [loading, setLoading] = useState(true)
    const loadData = () => {
        fetch(`https://peaceful-anchorage-19075.herokuapp.com/userOrder/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setUserOrder(data);
                setLoading(false)
            })
    }
    useEffect(() => {
        loadData()
    }, [loggedInUser.email])
    return (
        <div className='booking-list'>
            <div className="refresh-row">
                <h1 className="text-title my-5">Order List</h1>
                <button onClick={loadData} className="btn btn-primary">Refresh</button>
            </div>
            {
                loading ?
                    <img className='spinner' src={spinner} alt="" /> :
                    <div className="booking-list-row">
                        {
                            userOrder.map(order => <BookingListCard key={order._id} orderData={order}></BookingListCard>)
                        }
                    </div>

            }

        </div>
    );
};

export default BookingList;