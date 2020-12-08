import React from 'react';
import "./Fontawesomeicon.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import powerofpen from './powerofpen.svg';
import Pens from './testimonials1.png';
import Books from './testimonials2.png';
import book from './../book.svg';
import { Col, Row, Container } from 'react-bootstrap';
import './About.css';


function Workshop() {

    return (
        <div id="workshopsection" className="section-container bg-image2">          
                <div className="container workshopcontainer">
                    <h1 className="ibarra-title center">About the Workshop</h1>
                    <hr/>
                    <div>
                        <p className="ibarra text-white">
                        Writing the college application essay can be a meaningful and motivating opportunity for self-
                        knowledge, personal growth, and the development of your effectiveness as a writer. Dr. Lebo’s
                        knowledge of the psychology of writing, combined with your own creativity and work in small groups, will enable you to explore and express the unique voice within you. <br></br>Creating a powerful personal essay is the primary goal of <em>The Write Workshop</em>. 
                        </p>
                    </div>
                    <p className="ibarra text-white">In this process, you will:</p>
                </div>
       
            <Row>
                <Col>
                    <div class="card listCard">
                        <div class="row no-gutters">
                            <div class="col-sm-2" >
                                <FontAwesomeIcon className="sm-icon" icon="search" size="3x"/>
                            </div>
                            <div class="col-sm-10">
                                <div class="card-body">
                                    Identify the specific college essay questions that you need to answer.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card listCard">
                        <div class="row no-gutters">
                            <div class="col-sm-2" >
                                <FontAwesomeIcon className="sm-icon" icon="clipboard-check" size="3x"/>
                            </div>
                            <div class="col-sm-10">
                                <div class="card-body">
                                    Learn what distinguishes a successful essay from an unsuccessful one.
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="card listCard">
                        <div class="row no-gutters">
                            <div class="col-sm-2" >
                                <FontAwesomeIcon className="sm-icon" icon="heart" size="3x"/>
                            </div>
                            <div class="col-sm-10">
                                <div class="card-body">
                                    Explore your passions, values, and commitments and how they can be expressed through writing.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card listCard">
                        <div class="row no-gutters">
                            <div class="col-sm-2" >
                                <FontAwesomeIcon className="sm-icon" icon="link" size="3x"/>
                            </div>
                            <div class="col-sm-10">
                                <div class="card-body">
                                    “Try out” your ideas and ways to connect with your readers.
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Col>
                <Col>
                <div class="card listCard">
                        <div class="row no-gutters">
                            <div class="col-sm-2" >
                                <FontAwesomeIcon className="sm-icon" icon="comments" size="3x"/>
                            </div>
                            <div class="col-sm-10">
                                <div class="card-body">
                                    Plan and draft your essay(s); receive extensive feedback on your work.
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="card listCard">
                    <div class="row no-gutters">
                        <div class="col-sm-2" >
                            <FontAwesomeIcon className="sm-icon" icon="chalkboard-teacher" size="3x"/>
                        </div>
                        <div class="col-sm-10">
                            <div class="card-body">
                                Practice the critical art of revision under expert guidance.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card listCard">
                    <div class="row no-gutters">
                        <div class="col-sm-2" >
                            <FontAwesomeIcon className="sm-icon" icon="eye" size="3x"/>
                        </div>
                        <div class="col-sm-10">
                            <div class="card-body">
                                Learn about the “flow” of fresh, creative writing and the art of “showing” your experience.
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            </Row>


                {/* <Col>
                    <Image src={Pens} alt="pens" className="img" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={Books} alt="books" className="img" />
                </Col>
                <Col>
                    <ul className="aboutList">
                        <li>
                        “Try out” your ideas and ways to connect with your readers.
                        </li>
                        <li>
                        Plan and draft your essay(s); receive extensive feedback on your work.
                        </li>
                        <li>
                        Practice the critical art of revision under expert guidance.
                        </li>
                        <li>
                        Learn about the “flow” of fresh, creative writing and the art of “showing” your experience.
                        </li>
                    </ul>
                </Col>
            </Row>  */}
        </div>
    )
}

export default Workshop;