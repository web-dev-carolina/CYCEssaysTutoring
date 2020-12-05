import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Col, Row, Container } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import './Intro.css';
import bg from './../assets/Logo-test-PixTeller.mp4';


const Intro = () => {
    return (
        <Container fluid id="introsection">
            <Row>
                <Jumbotron className="bg-container intro-jumbotron">
                    <div className="bg-image m-0 p-0 jumbotronText center">
                        <Col className='m-auto text-center' md={6}>
                            <h1 className='ibarra jumbo-title p-3 m-auto text-center'>THE WRITE STORY</h1>
                            <div className='p-2 m-auto text-center poiret'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus libero elit, in lacinia eros rutrum vel.
                                </div>
                            <br></br>
                            <Button as={HLink} to="resources" variant="light" className="intro-button ibarra">Resources</Button>
                            <Button as={HLink} to="registration" variant="light" className="intro-button ibarra">Schedule</Button>
                        </Col>
                        <Col></Col>
                    </div>
                </Jumbotron>
            </Row>
        </Container>
    );
}
export default Intro;