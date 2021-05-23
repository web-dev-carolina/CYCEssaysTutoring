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
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicSchool">
                    <Form.Label>City/Town of Current School</Form.Label>
                    <Form.Control type="school" placeholder="City/Town" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicGrade">
                    <Form.Label>Grade/Year</Form.Label>
                    <Form.Control type="grade" placeholder="(e.g. Rising high school senior)" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicStreet">
                    <Form.Label>Street:</Form.Label>
                    <Form.Control type="street" placeholder="House number and street name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicCity">
                    <Form.Label>City:</Form.Label>
                    <Form.Control type="city" placeholder="City" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicState">
                    <Form.Label>State:</Form.Label>
                    <Form.Control type="state" placeholder="State" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicZipCode">
                    <Form.Label>Zip Code:</Form.Label>
                    <Form.Control type="zipCode" placeholder="Zip Code (e.g. 27601)" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicPhone">
                    <Form.Label>Cell phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter your phone number (no dashes)" />
                </Form.Group>
              </Form.Row>
                <Form.Group controlId="formBasicCollege">
                    <Form.Label>Top University Choice</Form.Label>
                    <Form.Control type="college" placeholder="Enter top university choice" />
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