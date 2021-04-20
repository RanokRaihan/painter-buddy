import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './PlaceOrder.css'


const PlaceOrder = () => {
    let { id } = useParams();
    const [selectedService, setSelectedService] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [message, setMessage] = useState('')
    const [formData, setFormData] = useState({
        name: loggedInUser.userName,
        email: loggedInUser.email,
        address: '',
        mobile: '',
        date: '',
        status: 'pending'
    });
    const [bookingData, setBookingData] = useState(null);
    const [orderMessage, setOrderMessage] = useState('')




    useEffect(() => {
        fetch(`https://peaceful-anchorage-19075.herokuapp.com/singleService/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedService(data[0])
            })
    }, [])




    function checkProperties(obj) {
        for (var key in obj) {
            if (obj[key] === null || obj[key] === "")
                return false;
        }
        return true;
    }
    const handleBlur = e => {
        const newFormData = { ...formData }
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData)
        // console.log(formData);
        // console.log(selectedService);
    }

    const handleBookingDetails = (event) => {
        event.preventDefault();
        if (checkProperties(formData)) {
            const newFormData = { ...selectedService, ...formData }
            delete newFormData._id;
            setBookingData(newFormData);
            console.log(bookingData);
            setMessage('')
        }
        else {
            setMessage('fill up the form first')
        }
    }

    const handlePlaceOrder = (paidWith) => {
        const newData = { ...bookingData, paidWith: paidWith };
        setBookingData(newData);
        console.log(bookingData);
        setTimeout(() => {
            console.log(bookingData);
            fetch('https://peaceful-anchorage-19075.herokuapp.com/placeOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setOrderMessage('order placed successfully')
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setMessage()
                });
        }, 300)

    }
    return (
        <div className='container-md place-order'>
            <div style={{ display: bookingData ? 'none' : 'block' }} className="shipment-detail">
                <div className='order-image-container'>
                    <img src={selectedService.imageURL} alt="" />
                </div>

                <h2 className='text-title my-5'>{selectedService.serviceTitle}</h2>
                <form onSubmit={handleBookingDetails} >
                    <label htmlFor="">Name</label>
                    <input onBlur={handleBlur} type="text" name='name' defaultValue={loggedInUser.userName} />
                    <label htmlFor="">Email</label>
                    <input onBlur={handleBlur} type="email" name='email' value={loggedInUser.email} />
                    <label htmlFor="">Address</label>
                    <input onBlur={handleBlur} type="text" name='address' placeholder='address' />
                    <label htmlFor="">Mobile</label>
                    <input onBlur={handleBlur} type="text" name='mobile' placeholder='Mobile Number' />
                    <label htmlFor="">Date</label>
                    <input onBlur={handleBlur} type="date" name='date' placeholder='Mobile Number' />
                    <button type='submit' className="btn btn-primary my-5">Submit</button>
                    {
                        <p className="text-title">{message}</p>
                    }
                </form>
            </div>

            <div style={{ display: bookingData ? 'block' : 'none' }}>
                <h2 className='text-title my-5'>Please Pay ${selectedService.price}</h2>
                <ProcessPayment handlePlaceOrder={handlePlaceOrder}></ProcessPayment>
            </div>
            <h1 className="text-title text-center text-large">{orderMessage}</h1>
        </div>
    );
};

export default PlaceOrder;