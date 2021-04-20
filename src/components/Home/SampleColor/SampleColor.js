import React from 'react';
import colonialHome from '../../../images/colonial-home.jpg'
import ranchHome from '../../../images/ranch-home.jpg'
import stuccoHome from '../../../images/stucco-home.jpg'
import './SampleColor.css'

const SampleColor = () => {
    const sampleColorData = [
        {
            title: 'Colonial Home',
            img: colonialHome
        },
        {
            title: 'Ranch Home',
            img: ranchHome
        },
        {
            title: 'Stucco Home',
            img: stuccoHome
        }
    ]
    return (
        <div className='container '>

            <h1 className="text-title text-center my-5">Sample Colors</h1>
            <div className="sample-color-row">
                {
                    sampleColorData.map(sample => {
                        return (
                            <div className='sample-color-card'>
                                <img src={sample.img} alt="" />
                                <h2>{sample.title}</h2>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default SampleColor;