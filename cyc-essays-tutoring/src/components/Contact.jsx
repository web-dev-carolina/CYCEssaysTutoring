import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Row, Container, Col } from 'react-bootstrap';
import './contact.css'

const Contact = ({ handleSubmit }) => {
    return (
        <Container id='contactsection' className="mb-5 mr-auto ml-auto contact-form section-container">
            <Row>
                <Col>
                    <div id="contactTitle">
                        <h1>Contact</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <div className="">
                        <h5 className="contact-caption">Please leave your name, email, and any comments or concerns. We will get back to
you as soon as possible!</h5>
                    </div>
                </Col>
                <Col xs className="pg1-2-txt">
                    <Form
                    //onSubmit={handleSubmit}
                    >
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="controlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" type="message" placeholder="Enter your message here" />
                        </Form.Group>
                        <Button variant="secondary" type="submit" className="center">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;