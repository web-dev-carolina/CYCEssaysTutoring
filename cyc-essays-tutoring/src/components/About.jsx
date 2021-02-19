import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import '../styles/About.css';
import bg2 from './../assets/latest.gif';

const About = () => {
    return (
        <Container id="aboutsection" className="section-container">
            <br/>
            <Col>
                <Row>
                    <Col className="logo-col col-4 d-none d-lg-block">
                        <img className="logo-img" src={bg2} alt='video/gif' />
                    </Col>
                    <Col>
                        <div className='enriq p-2 m-auto text-center'>
                            <h2 className="ibarra-title">Meet Dr.Lebo!</h2>
                            <hr/>
                            <img className="logo-img d-lg-none" src={bg2} alt='video/gif' />
                            <p className="ibarra">
                            <em>The Write Workshop</em> is facilitated by Dr. Dana Lebo, a leadership
                            development coach in Chapel Hill, NC. She first established this successful essay-writing
                            program in the greater Princeton, N.J., area in 1999, drawing on her experience as a
                            licensed psychologist, leadership and communications skills development consultant,
                            and former teacher of undergraduate writing at Rutgers University.  She has taught
                            hundreds of successful college application essay-writing workshops to rising high school
                            sophomores, juniors, and seniors seeking acceptance by the nation’s top colleges and
                            universities. Dr. Lebo earned her Ph.D. from Columbia University and M.A. and B.A. from
                            Georgetown University.
                            </p>
                        </div> 
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}

export default About;