import React from 'react';
import "./Fontawesomeicon.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row, Container } from 'react-bootstrap';
import '../styles/Workshop.css';


function Workshop() {

    return (
        <div id="workshopsection" className="section-container bg-image2">
            <div className="container workshopcontainer">
                <h1 className="ibarra-title center text-white">About the Workshop</h1>
                <hr />
                <div>
                    <p className="ibarra text-white">
                        Writing the college application essay can be a meaningful and motivating opportunity for self-
                        knowledge, personal growth, and the development of your effectiveness as a writer. Dr. Lebo’s
                        knowledge of the psychology of writing, combined with your own creativity and work in small groups, will enable you to explore and express the unique voice within you. <br></br>Creating a powerful personal essay is the primary goal of <em>The Write Workshop</em>.
                        </p>
                </div>
                <p className="ibarra text-white">In this process, you will:</p>
            </div>

            <Container>
                <Row>
                    <Col>
                        <div className="card listCard">
                            <div className="row no-gutters">
                                <div className="col-sm-2 center" >
                                    <FontAwesomeIcon className="sm-icon" icon="search" size="3x" />
                                </div>
                                <div className="col-sm-10">
                                    <div className="card-body">
                                        Identify the specific college essay questions that you need to answer.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card listCard">
                            <div className="row no-gutters">
                                <div className="col-sm-2 center" >
                                    <FontAwesomeIcon className="sm-icon" icon="clipboard-check" size="3x" />
                                </div>
                                <div className="col-sm-10">
                                    <div className="card-body">
                                        Learn what distinguishes a successful essay from an unsuccessful one.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card listCard">
                            <div className="row no-gutters">
                                <div className="col-sm-2 center" >
                                    <FontAwesomeIcon className="sm-icon" icon="heart" size="3x" />
                                </div>
                                <div className="col-sm-10">
                                    <div className="card-body">
                                        Explore your passions, values, and commitments and how they can be expressed through writing.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card listCard">
                            <div className="row no-gutters">
                                <div className="col-sm-2 center" >
                                    <FontAwesomeIcon className="sm-icon" icon="link" size="3x" />
                                </div>
                                <div className="col-sm-10">
                                    <div className="card-body">
                                        “Try out” your ideas and ways to connect with your readers.
                                </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div className="card listCard">
                            <div className="row no-gutters">
                                <div className="col-sm-2 center" >
                                    <FontAwesomeIcon className="sm-icon" icon="comments" size="3x" />
                                </div>
                                <div className="col-sm-10">
                                    <div className="card-body">
                                        Plan and draft your essay(s); receive extensive feedback on your work.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card listCard">
                            <div className="row no-gutters">
                                <div className="col-sm-2 center" >
                                    <FontAwesomeIcon className="sm-icon" icon="chalkboard-teacher" size="3x" />
                                </div>
                                <div className="col-sm-10">
                                    <div className="card-body">
                                        Practice the critical art of revision under expert guidance.
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="card listCard">
                            <div className="row no-gutters">
                                <div className="col-sm-2 center" >
                                    <FontAwesomeIcon className="sm-icon" icon="eye" size="3x" />
                                </div>
                                <div className="col-sm-10">
                                    <div className="card-body">
                                        Learn about the “flow” of fresh, creative writing and the art of “showing” your experience.
                            </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Workshop;