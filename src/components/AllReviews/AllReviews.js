import React, { useEffect, useState } from 'react';
import TestimonialCard from '../Home/TestimonialCard/TestimonialCard';

const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://peaceful-anchorage-19075.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        // using services component classes to reuse code
        <div className='services-wrapper'>
            <h1 className="text-title text-center">All Review</h1>
            <div className="service-row container">
                {
                    reviews.map(review => <TestimonialCard key={review._id} reviews={review}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;