import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import ContactForm from './ContactForm/ContactForm';
import DentalCareBanner from './DentalCareBanner/DentalCareBanner';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <TopBanner />
            <Contact />
            <Services />
            <DentalCareBanner />
            <AppointmentBanner />
            <Testimonial />
            <ContactForm />
            <Blog />
        </div>
    );
};

export default Home;