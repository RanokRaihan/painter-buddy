import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ services }) => {

    const { serviceTitle, imageURL, price, description, _id } = services;
    return (
        <div className='service-card'>
            <div className="service-image-container">
                <img src={imageURL} alt="" />
            </div>
            <h3 className='text-title'>{serviceTitle}</h3>
            <p className='service-price'>${price}</p>
            <p className="secondary">{description}</p>
            <div className="button-container">
                <Link to={`/bookService/${_id}`}>
                    <button className="btn btn-primary">Book Now</button>
                </Link>

            </div>

        </div>
    );
};

export default ServiceCard;