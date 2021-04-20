import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css';
import spinner from '../../../images/spinner.gif'

const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([])
    const history = useHistory();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://peaceful-anchorage-19075.herokuapp.com/highlightedReviews')
            .then(res => res.json())
            .then(data => {
                setTestimonialData(data)
                setLoading(false)
            })
    }, [])


    return (
        <div className='testimonial-wrapper'>
            <div className=" container">
                <h1 className='text-title text-center'>Testimonial</h1>
                <h2 className='text-center'>What our customars say</h2>
                {
                    loading ?
                        <img className='spinner' src={spinner} alt="" /> :
                        <div className='testimonial-row'>
                            {
                                testimonialData.map(data => <TestimonialCard key={data.id} reviews={data}></TestimonialCard>)
                            }
                        </div>
                }

                <button onClick={() => history.push('/allReviews')} className="btn btn-primary btn-center">All Reviews</button>
            </div>

        </div>
    );
};

export default Testimonials;