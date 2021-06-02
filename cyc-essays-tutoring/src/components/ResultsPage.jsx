import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import '../styles/ResultsPage.css';

//              1
//             2 3
//            4 5 6
//           7 8 9 10
//        11 12 13 14 15

function ResultsPage(){
return (
    <div id="results" className = "ResultsPage">
        <Container>
            <div className="title">
                    <hr/>
                        <h1 className="ibarra-title">Results</h1>
                        <hr/>
                    </div>
            <div className = "contentt">
            <Col className = "outer">
                <Row className=" d-flex justify-content-center">
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/220px-Yale_University_Shield_1.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">Yale University</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Dartmouth_College_shield.svg/140px-Dartmouth_College_shield.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">Dartmouth College</h3>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/150px-MIT_Seal.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">M.I.T.</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Stanford_University_seal_2003.svg/150px-Stanford_University_seal_2003.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">Stanford University</h3>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/1/16/New_York_University_Seal.svg/150px-New_York_University_Seal.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">New York University</h3>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/University_of_North_Carolina_at_Chapel_Hill_seal.svg/150px-University_of_North_Carolina_at_Chapel_Hill_seal.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">UNC: Chapel Hill</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Duke_University_Crest.svg/150px-Duke_University_Crest.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">Duke University</h3>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Georgetown_University_seal.svg/150px-Georgetown_University_seal.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">Georgetown University</h3>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/U.S._Military_Academy_Coat_of_Arms.svg/200px-U.S._Military_Academy_Coat_of_Arms.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">U.S. Military Academy</h3>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-2 item">                    
                            <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/8/84/United_States_Naval_Academy_insignia_2.png)" }}>
                            <div className = "cover">
                                <h3 class="name">U.S. Naval Academy</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Villanova_University_seal.svg/150px-Villanova_University_seal.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">Villanova University</h3>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/WashU_St._Louis_seal.svg/150px-WashU_St._Louis_seal.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">University of Washington: St. Louis</h3>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Amherst_College_Seal.svg/130px-Amherst_College_Seal.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">Amherst College</h3>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Johns_Hopkins_University%27s_Academic_Seal.svg/130px-Johns_Hopkins_University%27s_Academic_Seal.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">Johns Hopkins University</h3>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-2 item">
                        <div className = "box" style = {{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Williams_College_Seal.svg/150px-Williams_College_Seal.svg.png)" }}>
                            <div className = "cover">
                                <h3 class="name">Williams College</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            </div>
        </Container>
    </div>
);
}
export default ResultsPage;