import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';


const stripePromise = loadStripe('pk_test_51Ie2I8LRlHYMjkhgRDprBLfjTKNSUJNv2kDKkIolnkOHEjzB0yooW7B8ThsLycElFuNx64riaudDaSg7LxvAvDKR00zx1iHo4B');
const ProcessPayment = ({ handlePlaceOrder }) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm handlePlaceOrder={handlePlaceOrder}></PaymentForm>
            </Elements>
        </div>

    )
};

export default ProcessPayment;