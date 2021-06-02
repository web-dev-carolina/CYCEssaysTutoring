import React, {useRef, useState, useEffect} from 'react';
import ReactPayPal from './ReactPayPal';
import { Form, Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import '../styles/PayPalButton.css';
import { fontSize } from '@material-ui/system';
import { fireDb } from "../firebase/firebaseConfig";

export default function PayPalButton(givenEvent) {
  const event = givenEvent;
  const [checkout, setCheckout] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [properties, setProperties] = useState({});

  const nameRef = useRef();
  const schoolRef = useRef();
  const gradeRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const choiceRef = useRef();
  const messageRef = useRef();

  function checkCompleted() {       
    // checks to see if it's complete -- a form of validation --> update html part for actual validation
    if (nameRef.current.value != "" && schoolRef.current.value != "" && gradeRef.current.value != "" && streetRef.current.value != "" 
      && cityRef.current.value != "" && stateRef.current.value != "" && zipRef.current.value != "" && emailRef.current.value != "" && phoneRef.current.value != "") {
        setIsComplete(true);
        //console.log("completed true");
        setProps();
      } else {
        setIsComplete(false);
        //console.log("completed false");
      }
  }

  function registerStudent() {
    const newReference = fireDb.ref(`/students`).push();
    newReference.set({
      name: nameRef.current.value,
      school: schoolRef.current.value,
      grade: gradeRef.current.value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value, 
      zip: zipRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      choice: choiceRef.current.value,
      message: messageRef.current.value,
      events: []

    })          
  }

  function handleCheckout() {
    setProps();
    console.log(properties);
    setCheckout(true);
    console.log(givenEvent);
  }

  function setProps() {
    setProperties({name: nameRef.current.value, school: schoolRef.current.value, street: streetRef.current.value, 
      city: cityRef.current.value, state: stateRef.current.value, zip: zipRef.current.value, email: emailRef.current.value, 
      phone: phoneRef.current.value, choice: choiceRef.current.value, message: messageRef.current.value});
      console.log(properties);
      console.log(phoneRef.current.value);
  }

  // useEffect(() => {
  //   if (isComplete) {
  //     //setProps();
  //     console.log("use effect");
  //   }
  //   if (!isComplete) {
  //     console.log("use effect false");
  //   }

  // }, [isComplete]);

  return (
    <div className="paypal-container">
      <header className="paypal-header">
        {(checkout === true) 
          ? <div className="payment-div">
            <ReactPayPal info={properties}/>  
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
                    <Form.Control type="name" placeholder="Enter your name" ref={nameRef} onBlur={checkCompleted}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicSchool">
                    <Form.Label>City/Town of Current School</Form.Label>
                    <Form.Control type="school" placeholder="City/Town" ref={schoolRef} onBlur={checkCompleted}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicGrade">
                    <Form.Label>Grade/Year</Form.Label>
                    <Form.Control type="grade" placeholder="(e.g. Rising high school senior)" ref={gradeRef} onBlur={checkCompleted}/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicStreet">
                    <Form.Label>Street:</Form.Label>
                    <Form.Control type="street" placeholder="House number and street name" ref={streetRef} onBlur={checkCompleted}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicCity">
                    <Form.Label>City:</Form.Label>
                    <Form.Control type="city" placeholder="City" ref={cityRef} onBlur={checkCompleted}/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicState">
                    <Form.Label>State:</Form.Label>
                    <Form.Control type="state" placeholder="State" ref={stateRef} onBlur={checkCompleted}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicZipCode">
                    <Form.Label>Zip Code:</Form.Label>
                    <Form.Control type="zipCode" placeholder="Zip Code (e.g. 27601)" ref={zipRef} onBlur={checkCompleted}/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} onBlur={checkCompleted}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicPhone">
                    <Form.Label>Cell phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter your phone number (no dashes)" ref={phoneRef} onBlur={checkCompleted}/>
                </Form.Group>
              </Form.Row>
                <Form.Group controlId="formBasicCollege">
                    <Form.Label>Top University Choice</Form.Label>
                    <Form.Control type="college" placeholder="Enter top university choice" ref={choiceRef} onBlur={checkCompleted}/>
                </Form.Group>
                <Form.Group controlId="controlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        type="message" 
                        rows="5" 
                        ref={messageRef}
                        onBlur={checkCompleted}/>
                </Form.Group>
                <div style={{ textAlign: 'center' }}>
                <Button 
                className="center btn"
                variant="secondary" 
                type="submit" 
                className="center btn"
                onClick={handleCheckout}>
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