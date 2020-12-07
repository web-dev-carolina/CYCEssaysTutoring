import React from 'react';
import powerofpen from './powerofpen.svg';
import Pens from './testimonials1.png';
import Books from './testimonials2.png';
import { Col, Row, Container, Image } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container id="aboutsection" className="section-container">
            <Row>
                <Col>
                    <div id="aboutTitle">
                        <h1 className="ibarra-title">About</h1>
                    </div>
                </Col>
            </Row>
            <br></br>
            <Row className="aboutHeadline">
                <Col xs={{ order: 1 }} md={9}>
                    <div className="aboutStory enriq">
                        Writing the college application essay can be a meaningful and motivating opportunity for self-
                        knowledge, personal growth, and the development of your effectiveness as a writer. Dr. Lebo’s
                        knowledge of the psychology of writing, combined with your own creativity and work in small groups, will enable you to explore and express the unique voice within you. <br></br>Creating a powerful personal essay is the primary goal of <em>The Write Workshop</em>. In this process, you will:
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <Image src={powerofpen} alt="power-of-pen" id="powerofpen" className="rounded d-block mx-auto img-responsive" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className="aboutList">
                        <li>
                            Identify the specific college essay questions that you need to answer.
                        </li>
                        <li>
                            Learn what distinguishes a successful essay from an unsuccessful one.
                        </li>
                        <li>
                            Explore your passions, values, and commitments and how they can be expressed through writing.
                        </li>
                    </ul>
                </Col>
                <Col>
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
            </Row>
        </Container>
    );
}

export default About;