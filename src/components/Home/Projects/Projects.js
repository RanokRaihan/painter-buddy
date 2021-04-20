import React from 'react';
import house from '../../../images/house.jpg'

const Projects = () => {
    return (
        <div className='container'>
            <h1 className="text-title text-center my-5">Projects we have completed</h1>
            <div className="projects-row testimonial-row">
                <div className="my-5 service-card">
                    <img style={{ width: '100%' }} src={house} alt="" />
                    <h2 className="my-5">Royel palace paint</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti cum necessitatibus eum a sint. Nostrum laudantium architecto perspiciatis dolorum.</p>

                </div>
                <div className="my-5 service-card">
                    <img style={{ width: '100%' }} src={house} alt="" />
                    <h2 className="my-5">house paint</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti cum necessitatibus eum a sint. Nostrum laudantium architecto perspiciatis dolorum.</p>

                </div>
                <div className="my-5 service-card">
                    <img style={{ width: '100%' }} src={house} alt="" />
                    <h2 className="my-5">Room paint</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti cum necessitatibus eum a sint. Nostrum laudantium architecto perspiciatis dolorum.</p>

                </div>
            </div>
        </div>
    );
};

export default Projects;
