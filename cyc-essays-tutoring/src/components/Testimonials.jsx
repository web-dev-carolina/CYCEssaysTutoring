import React from 'react'
import './testimonials.css'
import Pens from './testimonials1.png'
import Books from './testimonials2.png'
import { Row, Container, Col } from 'react-bootstrap'
import './testimonials.css'

const Testimonials = () => {
    return (
        <Container id='testimonialssection'>
        <div className="testimonials-container">
            <section className="container">
                <h2 className=" text-left" >Testimonials</h2>
                
                    <br></br>
                
                <Row>
                    <Col>
                        <img src={Pens} alt="pens" className="img" />
                    </Col>
                    <Col>
                        <h2 className="section-heading">Some Testimonial</h2>
                        <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculusmus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="section-heading">Another one</h2>
                        <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculusmus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </Col>
                    <Col>
                        <img src={Books} alt="books" className="img" />
                    </Col>
                </Row>
                <div className="text-holder right">
                </div> 
                <br></br>
                {/* without this div contact moves up and covers second testimonial ?? */}
            </section>
        </div>
        </Container>

    );
}

export default Testimonials;