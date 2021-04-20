import React from 'react';
import { useState, useEffect } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import { useHistory } from 'react-router-dom';
import spinner from '../../../images/spinner.gif';

const Services = () => {
    const [services, setServices] = useState([])
    const history = useHistory();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://peaceful-anchorage-19075.herokuapp.com/highlightServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className='services-wrapper'>
            <h1 className="text-title text-center">Services</h1>
            <h3 className="text-center service-tagline">Services we Provide</h3>
            {
                loading ?
                    <img className='spinner' src={spinner} alt="" /> :
                    <div className="service-row container">
                        {
                            services.map(service => <ServiceCard key={service._id} services={service}></ServiceCard>)
                        }
                    </div>
            }


            <button onClick={() => history.push('/allService')} className="btn btn-info"> Explore all Services</button>



        </div>
    );
};

export default Services;