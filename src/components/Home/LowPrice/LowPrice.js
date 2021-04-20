import React from 'react';
import './LowPrice.css';
import surprisedPainter from '../../../images/surprised.png'

const LowPrice = () => {
    return (
        <div className='low-price-wrapper'>
            <div className="container low-price-row">
                <div className="low-price-text">
                    <h2>Thinking About</h2>
                    <h1 className='text-title'>Price?</h1>
                    <p className="text-secondary">House painting is often an important step of the moving process. If your home or rental property is in need of a fresh coat (or two) of paint, you’ll have to decide how you want to proceed. Do you hire a professional painter or break out the ladder and purchase the exterior house paint yourself? leave it to us. and don't think about price.</p>
                    <button className="btn btn-primary">Explore Prices</button>
                </div>
                <div className="low-price-image">
                    <img src={surprisedPainter} alt="" />
                </div>
            </div>

        </div>
    );
};

export default LowPrice;