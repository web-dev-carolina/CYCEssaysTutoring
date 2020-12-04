import React from 'react';
import powerofpen from './powerofpen.svg';
import Pens from './testimonials1.png';
import Books from './testimonials2.png';
import { Col, Row, Container, Image } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container id="aboutsection" className="section-container">
            <Row>
                <Col xs={{ order: 1 }} md={6}>
                    <h2 className='about-heading mb-3'>
                        About
                    </h2>
                    <div className="">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={powerofpen} alt="power-of-pen" id="powerofpen" className="rounded d-block mx-auto img-responsive" />
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <h2 className="section-heading">Service 1</h2>
                    <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculusmus.</p>
                </Col>
                <Col>
                    <Image src={Pens} alt="pens" className="img" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={Books} alt="books" className="img" />
                </Col>
                <Col>
                    <h2 className="section-heading">Service 2</h2>
                    <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculusmus.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;