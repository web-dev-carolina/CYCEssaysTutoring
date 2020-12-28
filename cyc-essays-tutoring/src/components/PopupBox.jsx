import React from 'react';
import ReactModal from "react-modal";
import { Form, Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import { Axios, db } from '../firebase/firebaseConfig';
import Tooltip from '@material-ui/core/Tooltip';
import '../styles/Contact.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '60%',
      zIndex : 10000,
      position: 'relative',
      background: 'rgba(189,195,199,0.7)',
    }
  };

export default class PopupBox extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
        registerModal: false,
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.handleRegisterEvent = this.handleRegisterEvent.bind(this);
      this.sendEmail = this.sendEmail.bind(this);
      this.handleSendEmail = this.handleSendEmail.bind(this);
    }

    componentDidUpdate() {
        ReactModal.setAppElement('body');
    }
    
    handleOpenModal () {
        this.setState({ showModal: true });
    }
    
    handleCloseModal () {
        this.setState({ registerModal: false });
        this.setState({ showModal: false });
    }

    handleRegisterEvent () {
        this.setState({ registerModal: true });
    }

    sendEmail = (name, email, message) => {
        const formData = {
            name: name,
            email: email,
            message: message,
        }
        console.log(formData);
        if (name === "" || email === "" || message === "") {
            return
        } else {
        Axios.post(
            'https://us-central1-cycessays.cloudfunctions.net/submit',
            formData
          )
            .then(res => {
              db.collection('emails').add({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                time: new Date(),
              });
              alert("Your message has been sent!");
            })
            .catch(error => {
              console.log(error)
            });
        }
    };

    handleSendEmail (e) {
        e.preventDefault();
        this.sendEmail(e.target.formBasicName.value,
               e.target.formBasicEmail.value,
                e.target.controlTextarea1.value);
        this.setState({ registerModal: false });
        this.handleCloseModal();
    }
    
    render () {
        const { event } = this.props;
        let color = "#" + event.color;
        let starting = event.start.toString().split(" ");
        let startingTime = starting[4].split(":");
        let startDon = " AM";
        if(parseInt(startingTime[0]) > 12) {
            startingTime[0] = parseInt(startingTime[0]) - 12;
            startDon = " PM";
        }

        let ending = event.end.toString().split(" ");
        let endingTime = ending[4].split(":");
        let endDon = " AM";
        if(parseInt(endingTime[0]) > 12) {
            endingTime[0] = parseInt(endingTime[0]) - 12;
            endDon = " PM";
        }

        let startDate = "";
        let endDate = "";
        if(starting[1]==="Jan") {
            startDate += "1";
        } else if(starting[1]==="Feb") {
            startDate += "2";
        } else if(starting[1]==="Mar") {
            startDate += "3";
        } else if(starting[1]==="Apr") {
            startDate += "4";
        } else if(starting[1]==="May") {
            startDate += "5";
        } else if(starting[1]==="Jun") {
            startDate += "6";
        } else if(starting[1]==="Jul") {
            startDate += "7";
        } else if(starting[1]==="Aug") {
            startDate += "8";
        } else if(starting[1]==="Sep") {
            startDate += "9";
        } else if(starting[1]==="Oct") {
            startDate += "10";
        } else if(starting[1]==="Nov") {
            startDate += "11";
        } else if(starting[1]==="Dec") {
            startDate += "12";
        }
        startDate += "/" + starting[2] + "/" + starting[3];

        if(starting[1]==="Jan") {
            endDate += "1";
        } else if(starting[1]==="Feb") {
            endDate += "2";
        } else if(starting[1]==="Mar") {
            endDate += "3";
        } else if(starting[1]==="Apr") {
            endDate += "4";
        } else if(starting[1]==="May") {
            endDate += "5";
        } else if(starting[1]==="Jun") {
            endDate += "6";
        } else if(starting[1]==="Jul") {
            endDate += "7";
        } else if(starting[1]==="Aug") {
            endDate += "8";
        } else if(starting[1]==="Sep") {
            endDate += "9";
        } else if(starting[1]==="Oct") {
            endDate += "10";
        } else if(starting[1]==="Nov") {
            endDate += "11";
        } else if(starting[1]==="Dec") {
            endDate += "12";
        }
        endDate += "/" + ending[2] + "/" + ending[3];

        return (
        <div>
            <button style={{ width: '100%', border: 'none', backgroundColor: 'Transparent' }} onClick={this.handleOpenModal}>{event.title}</button>
            <ReactModal 
                isOpen={this.state.showModal}
                contentLabel="Calendar Event"
                style={{
                    content : {
                      top                   : '50%',
                      left                  : '50%',
                      right                 : 'auto',
                      bottom                : 'auto',
                      marginRight           : '-50%',
                      transform             : 'translate(-50%, -50%)',
                      width                 : '60%',
                      zIndex : 10000,
                      position: 'relative',
                      background: 'rgba(135, 156, 196, 0.7)',
                    }
                }}
                appElement={document.getElementById('app')}
                className="form-container shadow enriq"
            >
                {!this.state.registerModal ? 
                    (<div>
                        <Tooltip title="Close">
                            <button onClick={this.handleCloseModal} style={{ border: 'none', float: 'right', backgroundColor: 'Transparent', fontSize: '100%' }}>✕</button>
                        </Tooltip>
                        <div style={{ textAlign: 'center' }}><strong style={{ fontSize: '25px' }}>{event.title}</strong></div><br />
                        {(event.vac == 'FULL') ? (
                        <><div style={{ textAlign: 'center'}}><string style={{fontSize:'20px'}}>{event.vac}</string></div><br /></> ) : (<div></div>) }
                        <div style={{ textAlign: 'center' }}>{startDate} {startingTime[0]}:{startingTime[1]}{startDon} - {endDate} {endingTime[0]}:{endingTime[1]}{endDon}</div><br />
                        <div style={{ fontSize: '18px', textAlign: 'center' }}>{event.description}</div><br />
                        <div style={{ textAlign: 'center' }}>
                            <Button variant="secondary" 
                                className="center btn" 
                                onClick={this.handleRegisterEvent}
                                style={{ backgroundColor: color, border: 'none', }}>
                                Register
                            </Button>
                        </div>
                    </div>)
                    :
                    (<div>
                        <Tooltip title="Close">
                            <button onClick={this.handleCloseModal} style={{ border: 'none', float: 'right', backgroundColor: 'Transparent' }}>✕</button>
                        </Tooltip>
                        <div style={{ textAlign: 'center' }}><strong style={{fontSize: '25px'}}>Register for {event.title}</strong></div><br />
                        <Col xs className="pg1-2-txt">
                            <Form
                            onSubmit={this.handleSendEmail}
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
                                    <Form.Control 
                                        as="textarea" 
                                        type="message" 
                                        rows="5"
                                        defaultValue={"I would like to register for " + event.title + 
                                            " during " + startDate +  " " + startingTime[0] + ":" + startingTime[1] + startDon + " - " + 
                                            endDate + " " + endingTime[0] + ":" + endingTime[1] + endDon + "."} />
                                </Form.Group>
                                <div style={{ textAlign: 'center' }}>
                                    <Button 
                                        variant="secondary" 
                                        type="submit" 
                                        className="center btn"
                                        style={{ backgroundColor: color, border: 'none', }}>
                                        Sign Up
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </div>)
                }
                
            </ReactModal>
            </div>
        );
    }
  }

