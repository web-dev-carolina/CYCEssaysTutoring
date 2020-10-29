import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import './Intro.css';


const Intro = () => {
    return (
        <Jumbotron className="bg-container intro-jumbotron">

            <div className="bg-image mt-0">
                <div className="jumbotronText">
                    <Row>                        
                        <div className='col-xs-12 col-md-6'></div>
                    </Row>
                    <Row className='m-auto text-center'>
                        <div className='col-xs-12 col-md-6'>
                            <h1 className='jumbo-title p-5 m-auto text-center'>Introduce Your Product Quickly & Effectively</h1>
                            <div className='p-2 m-auto text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus libero elit, in lacinia eros rutrum vel. Nullam pulvinar felis non molestie elementum. Ut commodo augue at lacus maximus, non tristique nunc iaculis. Donec ante enim, sagittis in imperdiet eu, consequat sed nisi. In hac habitasse platea dictumst. Aliquam ut mauris sed ligula pretium auctor.
                            </div>
                            <br></br>
                            <Button as={HLink} to="resources" variant="light" className="intro-button">Resources</Button>
                            <Button as={HLink} to="registration" variant="light" className="intro-button">Schedule</Button>
                        </div>

                    </Row>

                </div>
            </div>
        </Jumbotron>
    );
}
export default Intro;