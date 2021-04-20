import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({ reviews }) => {
    let stars = [];
    for (let i = 0; i < (reviews.rating) * 1; i++) {
        stars.push(<FontAwesomeIcon className='text-title' key={i} icon={faStar}></FontAwesomeIcon>)
    }
    return (
        <div className='testimonial-card'>
            <div className="review-image-container">
                <img src={reviews.picture} alt="" />
            </div>
            <h2>{reviews.name}</h2>
            <small>{reviews.company}</small>
            <p className="text-secondary">{reviews.review}</p>
            {stars}
        </div>
    );
};

export default TestimonialCard;