import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {

    return (
        <>
        <Container id="footer">
            {/* <footer className="footer ml-auto mr-auto"> */}
                <Row>
                    <Col>
                        The Write Story
                    </Col>
                    <Col>
                        Copyright © 2020 Dr. Dana Lebo
                    </Col>
                </Row>
            {/* </footer> */}
            </Container>
        </>
    );
}


export default Footer;
