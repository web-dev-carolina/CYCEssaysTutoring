import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Row, Container, Col } from 'react-bootstrap';
import './contact.css'

const Contact = ({ handleSubmit }) => {
    return (
        <Container id='contactsection' className="mb-5 mr-auto ml-auto contact-form section-container">
            <Row>
                <Col xs={12} md={6}>
                    <div className="text-center contact-container">
                        <h1 className="ibarra-title">Contact</h1>
                        <div className="paragraph-light enriq">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculusmus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
                    </div>
                </Col>
                <Col xs className="pg1-2-txt d-flex align-items-center justify-content-center">
                    <Form className="enriq form-container shadow"
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