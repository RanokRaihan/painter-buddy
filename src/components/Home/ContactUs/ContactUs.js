import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div id='contact' className='container-md contact-row'>
            <div className="visiting-hour">
                <h2 className="text-title">Come For a Visit</h2>
                <p>Ram Chandra Roy  Road <br />Peyaratola, Kushtia Shadar <br />Kushtia -7000</p>
                <div className="day-row">
                    <div className='day-group'>
                        <h3>Sunday</h3>
                        <small>9:00 am - 10:00 pm</small>
                    </div>

                    <div className='day-group'>
                        <h3>Monday</h3>
                        <small>9:00 am - 10:00 pm</small>
                    </div>

                    <div className='day-group'>
                        <h3>Tuesday</h3>
                        <small>9:00 am - 10:00 pm</small>
                    </div>

                    <div className='day-group'>
                        <h3>Wednesday</h3>
                        <small>9:00 am - 10:00 pm</small>
                    </div>

                    <div className='day-group'>
                        <h3>Thusday</h3>
                        <small>9:00 am - 10:00 pm</small>
                    </div>

                    <div className='day-group'>
                        <h3>Friday</h3>
                        <small>9:00 am - 12:00 pm</small>
                        <br />
                        <small>3:00 pm - 8:00 pm</small>
                    </div>

                    <div className='day-group'>
                        <h3>saturday</h3>
                        <small>9:00 am - 10:00 pm</small>
                    </div>
                </div>
            </div>
            <div></div>
            <div className="contact-form">
                <h2 className="text-title">Have Someting to say?</h2>
                <p className="text-seconary tag-line">Leave a Message</p>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">message</label>
                        <textarea type="text" name="" className="text-area" placeholder='write your message' ></textarea>
                    </div>
                    <button className='btn btn-primary' type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default ContactUs;