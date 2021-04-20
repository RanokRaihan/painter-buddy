import React from 'react';
import './Showcase.css';
import ShowcasePainter from '../../../images/painter.png';

const Showcase = () => {
    return (
        <div className='showcase-wrapper'>
            <div className="container showcase-row">
                <div className="showcase-text">
                    <h1>Wellcome To</h1>
                    <h2 className='text-title'>Painter Buddy</h2>
                    <p className="text-secondary">Thinking about your house hold painting?then you are at the right place. we paint almost everything at lowest price in market. and we guarenty the best quality of work</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
                <div className="showcase-image">
                    <img src={ShowcasePainter} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Showcase;