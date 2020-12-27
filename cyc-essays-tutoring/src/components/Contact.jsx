import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import { Row, Container, Col } from 'react-bootstrap';
import '../styles/Contact.css'

const Contact = ({ handleSubmit }) => {
    return (
        <Container id='contactsection' className="mb-5 mr-auto ml-auto contact-form section-container">
            
            <Row>
                <Col>                
                    <hr/>
                        <h1 id="" className="ibarra-title text-center">Contact</h1>
                    <hr/>
                </Col>
            </Row>
          
            <Row>
                <Col className="contact-info" md={12} lg={6}>
                    <div>
                        <h5 className="contact-caption enriq">Please leave your name, email, and any comments or concerns. We will get back to
you as soon as possible!</h5>
<br></br>
                        <h3 className="contact-caption enriq"><b>To attend a workshop, please <Link to="/registration">schedule</Link> here.</b></h3>
                    </div>
                </Col>
                <Col xs className="pg1-2-txt">
                    <Form className="form-container shadow enriq"
                    onSubmit={handleSubmit}
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