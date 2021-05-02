import React from 'react';
import ReactPayPal from './ReactPayPal';
import { Form, Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import '../styles/PayPalButton.css';
import { fontSize } from '@material-ui/system';

export default function PayPalButton(givenEvent) {
  const event = givenEvent;
  const [checkout, setCheckout] = React.useState(false);

  return (
    <div className="paypal-container">
      <header className="paypal-header">
        {(checkout === true) 
          ? <div className="payment-div">
            <ReactPayPal />
          </div> 

          :
          // <div>
          //   <h1 style={{ textAlign: 'center', fontSize: '160%'}}>Register for Feb Event</h1>
          //   <Button 
          //     className="center btn"
          //     variant="secondary" 
          //     type="submit" 
          //     className="center btn"
          //     onClick={() => {setCheckout(true)}}>
          //       Checkout
          //     </Button>
          // </div>
        
    <div>
      <div style={{ textAlign: 'center' }}><strong style={{fontSize: '25px'}}>Register for {event.title}</strong></div><br />
      <Col xs className="pg1-2-txt">
                            <Form>
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
                                    <Form.Control 
                                        as="textarea" 
                                        type="message" 
                                        rows="5" />
                                </Form.Group>
                                <div style={{ textAlign: 'center' }}>
                                <Button 
                                className="center btn"
                                variant="secondary" 
                                type="submit" 
                                className="center btn"
                                onClick={() => {setCheckout(true)}}>
                                  Checkout
                                </Button>
                                </div>
                            </Form>
                        </Col>
                
    </div>
   
        }
        </header>
 </div>
  );
}