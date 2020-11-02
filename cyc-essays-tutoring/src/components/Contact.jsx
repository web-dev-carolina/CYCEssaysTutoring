import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import './contact.css'

const Contact = () => {
    return (
        <Row>
        <div className="container mb-5 row mr-auto ml-auto contact-form">
            <div className="col-xs-12 col-md-6">
                <div className="text-center">
                    <h2 className="section-heading">Contact</h2>
                    <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
            </div>
            <div className="col-xs-12 col-md-6">
                <div className="pg1-2-txt">
                <Form>
                <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" type="message" placeholder="Enter your message here" />
                    </Form.Group>
                    <Button variant="secondary" type="submit" block>
                        Send
                    </Button>
                </Form>
                    
                </div>
            </div>
        </div>
        </Row>

    )
}

export default Contact;