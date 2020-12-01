import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {

    return (
        <>
        <Container>
            <footer className=" footer ml-auto mr-auto">
            
                <Row className='p-2'>
                    <Col>
                    <div className='col-3'>
                    </div>
                    <div className='col-3 ml-auto'>
                        Inner Stories
                    </div>
                    </Col>
                    <Col>
                    <div className='col-5'>
                    Copyright © 2020 Dr. Dana Lebo
                    </div>
                    <div className='col-1'>
                    </div>
                    </Col>
                </Row>
                <hr width='75%' />
            </footer>
            </Container>
        </>
    );
}


export default Footer;
