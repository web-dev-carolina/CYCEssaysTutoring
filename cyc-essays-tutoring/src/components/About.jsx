import React from 'react';
import powerofpen from './powerofpen.svg';
import { Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Row>
        <div className="container mb-5 row mr-auto ml-auto" id="about">
            <div className='col-xs-12 col-md-6 text-center'>
                <h2 className='about-heading mb-3'>
                    About
                </h2>
                <div className="">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
            </div>
            <div className="col-xs-12 col-md-6">
                <img src={powerofpen} alt="power-of-pen" className=" img-fluid rounded" />
            </div>

        </div>
        </Row>


    );
}

export default About;