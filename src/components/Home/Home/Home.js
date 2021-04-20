import React from 'react';
import Footer from '../../Footer/Footer';
import ContactUs from '../ContactUs/ContactUs';
import LowPrice from '../LowPrice/LowPrice';
import Projects from '../Projects/Projects';
import SampleColor from '../SampleColor/SampleColor';
import Services from '../Services/Services';
import Showcase from '../Showcase/Showcase';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Showcase></Showcase>
            <Services></Services>
            <LowPrice></LowPrice>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <SampleColor></SampleColor>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div >
    );
};

export default Home;