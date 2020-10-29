import React from 'react'
import './testimonials.css'
import Pens from './testimonials1.png'
import Books from './testimonials2.png'
import { Row } from 'react-bootstrap'
import './testimonials.css'

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <section className="container">
                <h2 className=" text-left" >Testimonials</h2>
                <Row>
                    <br></br>
                </Row>
                <Row>
                    <div class='col-md-6'>
                        <img src={Pens} alt="pens" className="img" />
                    </div>
                    <div class='col-md-6 text-holder text-center'>
                        <h2 className="section-heading">Some Testimonial</h2>
                        <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculusmus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </Row>
                <Row>
                    <div class='col-md-6 text-holder text-center'>
                        <h2 className="section-heading">Another one</h2>
                        <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculusmus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                    <div class='col-md-6'>
                        <img src={Books} alt="books" className="img" />
                    </div>
                </Row>
                <div class="text-holder right">
                </div> 
                {/* without this div contact moves up and covers second testimonial ?? */}
            </section>
        </div>

    );
}

export default Testimonials;