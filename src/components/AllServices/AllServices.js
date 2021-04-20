import React, { useState, useEffect } from 'react';
import ServiceCard from '../Home/ServiceCard/ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://peaceful-anchorage-19075.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data);
            })
    }, [])

    return (
        <div className='services-wrapper'>
            <h1 className="text-title text-center">Services</h1>
            <h3 className="text-center">Services we Provide</h3>
            <div className="service-row container">
                {
                    services.map(service => <ServiceCard key={service._id} services={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;