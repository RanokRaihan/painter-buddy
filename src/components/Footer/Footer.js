import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
import React from 'react';

const Footer = () => {
    return (
        <div className='footer-wrapper' >
            <div className="container footer-row">
                <div>
                    <h2 className='text-title'> Visit Us</h2>
                    <p className="footer-content">Ramchandra Roy Road <br />Peyaratola,kushtia</p>
                </div>
                <div>
                    <h2 className='text-title'>Stay Tuned</h2>
                    <p className="footer-content">Connect with us and stay in loop</p>
                    <button className="btn btn-primary btn-social"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </button>
                    <button className="btn btn-primary btn-social"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> </button>
                </div>
                <div>
                    <h2 className="text-title">Email Update</h2>
                    <p className="footer-content">Be the first to hear about our offer and annoucements</p>
                    <input type="email" placeholder='Email' />
                </div>
                <div>
                    <h2 className="text-title">Contact Us</h2>
                    <p className="footer-content">Question? We have answers. Try us</p>
                    <button className="btn btn-primary">Email Us</button>
                </div>

            </div>
            <div className="copy-rights">
                <p>Copyright &copy; - <span className="text-title">Painter Buddy</span> </p>
            </div>
        </div>
    );
};

export default Footer;