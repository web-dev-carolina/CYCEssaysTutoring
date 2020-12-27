import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import '../styles/Footer.css'

const Footer = () => {

    return (
        <Container fluid id="footer">
            <Row>
                <Col>
                    The Write Story
                    </Col>
                <Col>
                    Copyright © 2020 Dr. Dana Lebo
                    </Col>
            </Row>
        </Container>
    );
}


export default Footer;
