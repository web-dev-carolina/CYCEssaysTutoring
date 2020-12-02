import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {

    return (
        <Container id="footer">
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
