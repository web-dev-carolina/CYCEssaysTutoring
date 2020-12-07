import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Col, Row, Container } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import './Intro.css';
import bg from './../assets/logo_animation.mp4';
import bg2 from './../assets/latest.gif';
import bg3 from './../assets/jumbotron.mp4';


const Intro = () => {
    return (
        <Container fluid id="introsection">
            <Row>
                <Jumbotron className="bg-container intro-jumbotron">
                    <div className="m-0 p-0 jumbotronText center">
                        <video id="myVideo" autoPlay muted>
                            <source src={bg3} type='video/mp4' />
                        </video>  
                        <Col></Col>
                        <Col className='m-auto text-center container col-6'>
                            <h1 className='ibarra jumbo-title p-3 m-auto text-center subtitle-overlay'>Craft the college essay that endears, endures, and opens doors.</h1>
                            <div className='enriq p-2 m-auto text-center'>
                            <em>The Write Workshop</em> is facilitated by Dr. Dana Lebo, a leadership
                            development coach in Chapel Hill, NC. She first established this successful essay-writing
                            program in the greater Princeton, N.J., area in 1999, drawing on her experience as a
                            licensed psychologist, leadership and communications skills development consultant,
                            and former teacher of undergraduate writing at Rutgers University.  She has taught
                            hundreds of successful college application essay-writing workshops to rising high school
                            sophomores, juniors, and seniors seeking acceptance by the nation’s top colleges and
                            universities. Dr. Lebo earned her Ph.D. from Columbia University and M.A. and B.A. from
                            Georgetown University.
                                </div>
                            <br></br>
                            <Button as={HLink} to="resources" variant="light" className="intro-button ibarra">Resources</Button>
                            <Button as={HLink} to="registration" variant="light" className="intro-button ibarra">Schedule</Button>
                        </Col>
                    </div>
                </Jumbotron>
            </Row>
        </Container>
    );
}
export default Intro;