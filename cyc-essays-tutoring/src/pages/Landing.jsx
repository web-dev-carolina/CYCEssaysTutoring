import React from 'react';
import About from '../components/About';
import Intro from '../components/Intro';
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer/Footer';

const Landing = () => {

    return(
        <>
            <Intro></Intro>
            <About></About>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );

}

export default Landing;