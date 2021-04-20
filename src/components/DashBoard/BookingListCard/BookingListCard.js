import React from 'react';
import './BookingListCard.css'

const BookingListCard = ({ orderData }) => {
    let color = '#000';
    switch (orderData.status) {
        case 'pending':
            color = '#F82111';
            break;
        case 'on going':
            color = '#0184A0';
            break;
        case 'done':
            color = '#00A818';
            break;
        default:
            color = '#F82111';
    }
    return (
        <div className='booking-list-card'>
            <div className="booking-img-container">
                <img src={orderData.imageURL} alt="" />
            </div>
            <h3 className='text-title'>{orderData.serviceTitle}</h3>
            <small>${orderData.price}</small>
            <p>{orderData.description}</p>
            <button className="status" style={{ border: `2px solid ${color}`, color: color }}>{orderData.status}</button>

        </div>
    );
};

export default BookingListCard;