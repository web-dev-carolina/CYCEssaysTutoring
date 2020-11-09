import React from 'react';
import { Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {

    return (
        <>
            <footer className=" footer ml-auto mr-auto">
            
                <Row className='p-2'>
                    <div className='col-3'>
                    </div>
                    <div className='col-3 ml-auto'>
                        Inner Stories
                    </div>
                    <div className='col-5'>
                    Copyright © 2020 Dr. Dana Lebo
                    </div>
                    <div className='col-1'>
                    </div>
                </Row>
                <hr width='75%' />
            </footer>
        </>
    );
}


export default Footer;