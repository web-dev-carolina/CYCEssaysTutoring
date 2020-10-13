import React from 'react';
import About from '../components/About';
import Intro from '../components/Intro';
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Landing = () => {

    return(
        <>
            <Intro></Intro>
            <About></About>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </>
    );

}

export default Landing;