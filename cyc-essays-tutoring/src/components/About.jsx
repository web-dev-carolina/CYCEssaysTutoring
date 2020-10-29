import React from 'react';
import powerofpen from './powerofpen.svg';
import './About.css';

const About = () => {
    return (
        <div className="container mb-5 row mr-auto ml-auto" id="about">
            <div className='col-xs-12 col-md-6 '>
                <h2 className='about-heading mb-3'>
                    About
                </h2>
                <div className="">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                <div className='mt-5 mb-3'></div>
                    Description of what the workshop is.
                </div>
            </div>
            <div className="col-xs-12 col-md-6">
                <img src={powerofpen} alt="pens" className="mt-5 mb-5 img-fluid rounded" />
            </div>

        </div>


    );
}

export default About;