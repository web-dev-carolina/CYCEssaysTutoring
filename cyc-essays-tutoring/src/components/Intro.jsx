import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Col, Row, Container } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import '../styles/Intro.css';
import logo from './../assets/titleimg.png';
import bg2 from './../assets/latest.gif';


const Intro = () => {
    return (
        <Container fluid className="bg-image" id="introsection">
            <Row>
                <Jumbotron className="bg-container intro-jumbotron">
                    <Row className="m-0 p-0 jumbotronText center">                     
                        <Col className='m-auto text-center d-none d-lg-block'>
                            <div className="container">
                                <h1 className='enriq jumbo-title p-3 m-auto text-center subtitle-overlay'>Craft the college essay that <em>endears</em>, <em>endures</em>, and <em>opens doors</em>.</h1>
                            </div>
                            <br></br>
                            <Button as={HLink} to="resources" variant="light" size="lg" className="intro-button ibarra shadow">Resources</Button>
                            <Button as={HLink} to="registration" variant="light" size="lg" className="intro-button ibarra shadow">Schedule</Button>
                        </Col>
                        <Col className="d-none d-lg-block">
                            <img className="logo-img" src={logo} alt="logo"></img>
                        </Col>
                         {/* mobile */}
                         <Col className="d-lg-none">
                            <img className="logo-img center" src={logo} alt="logo"></img>
                        </Col>
                         <Col className='m-auto text-center intro-container d-lg-none'>
                             <div className="container">
                            <h1 className='ibarra jumbo-title p-3 m-auto text-center subtitle-overlay'>Craft the college essay that endears, endures, and opens doors.</h1>
                            </div>
                            <br></br>
                            <Button as={HLink} to="resources" variant="light" className="intro-button ibarra-small shadow">Resources</Button>
                            <Button as={HLink} to="registration" variant="light" className="intro-button ibarra-small shadow">Schedule</Button>
                        </Col>
                        
                    </Row>
                </Jumbotron>
            </Row>
        </Container>
    );
}
export default Intro;