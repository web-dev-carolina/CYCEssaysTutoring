import React from 'react';
import powerofpen from './powerofpen.svg';
import { Col, Row, Container, Image } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container id="aboutsection" className="section-container">
            <Row id="wrapper-row" className="d-flex align-items-center justify-content-center">
                {/* <div className="container mb-5 row mr-auto ml-auto"> */}
                <Col className="" xs={{order: 1}} md={6}>
                    <h2 className='about-heading mb-3 ibarra-title'>
                        About
                    </h2>
                    <div className="enriq">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. 
                        Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </div>
                </Col>
                <Col className="" xs={12} md={6}>
                    <Image src={powerofpen} alt="power-of-pen" id="powerofpen" className="rounded d-block mx-auto img-responsive" />
                </Col>
                {/* </div> */}
            </Row>
        </Container>
    );
}

export default About;