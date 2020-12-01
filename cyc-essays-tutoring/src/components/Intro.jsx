import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Col, Row, Container } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import './Intro.css';


const Intro = () => {
    return (
        <Container fluid id="introsection">
            <Row>
                <Jumbotron className="bg-container intro-jumbotron">
                    <div className="bg-image mt-0 jumbotronText">
                        <Col className='m-auto text-center'>
                            <h1 className='jumbo-title p-5 m-auto text-center'>Introduce Your Product</h1>
                            <div className='p-2 m-auto text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus libero elit, in lacinia eros rutrum vel.
                                </div>
                            <br></br>
                            <Button as={HLink} to="resources" variant="light" className="intro-button">Resources</Button>
                            <Button as={HLink} to="registration" variant="light" className="intro-button">Schedule</Button>
                        </Col>
                    </div>
                </Jumbotron>
            </Row>
        </Container>
    );
}
export default Intro;