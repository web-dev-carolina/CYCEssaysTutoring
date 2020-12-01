import React from 'react'
import './testimonials.css'
import Pens from './testimonials1.png'
import Books from './testimonials2.png'
import { Row, Container, Col, Image } from 'react-bootstrap'
import './testimonials.css'

const Testimonials = () => {
    return (
        <Container id='testimonialssection' className="section-container">
            <Row>
                <Col>
                    <h2 className=" text-left" >Testimonials</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={Pens} alt="pens" className="img" />
                </Col>
                <Col>
                    <h2 className="section-heading">Some Testimonial</h2>
                    <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculusmus.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="section-heading">Another one</h2>
                    <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculusmus.</p>
                </Col>
                <Col>
                    <Image src={Books} alt="books" className="img" />
                </Col>
            </Row>
            <div className="text-holder right">
            </div>
            <br></br>
            {/* without this div contact moves up and covers second testimonial ?? */}
        </Container>

    );
}

export default Testimonials;