import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Resources.css';


const Resources = () => {
    return (
        <Container className="resources-container">
            <Row>
                <Col>
                    <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Hands_typing_on_white_laptop_scene.svg" alt="File:Hands typing on white laptop scene.svg"></img>
                    </div>
                </Col>
                <Col>
                    <Row>
                        <h1>Resources</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus - 
description of what types of resources you are delivering here, maybe link a google drive folder with articles, etc. that you think are valuable</p>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <div class="tile">
                                    <div class="icondiv">
                                        <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Pencil_icon_vector.svg" alt="Craig Creeger, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"></img>
                                    </div>
                                    <div class="fileMain">
                                        <h4>File Title</h4>
                                        <p>File info: Lorem ipsum - short description of item </p> 
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div class="tile">
                                    <div class="icondiv">
                                        <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Pencil_icon_vector.svg" alt="Craig Creeger, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"></img>
                                    </div>
                                    <div class="fileMain">
                                        <h4>File Title</h4>
                                        <p>File info: Lorem ipsum - short description of item </p> 
                                    </div>
                                </div>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <div class="tile">
                                    <div class="icondiv">
                                        <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Pencil_icon_vector.svg" alt="Craig Creeger, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"></img>
                                    </div>
                                    <div class="fileMain">
                                        <h4>File Title</h4>
                                        <p>File info: Lorem ipsum - short description of item </p> 
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div class="tile">
                                    <div class="icondiv">
                                        <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Pencil_icon_vector.svg" alt="Craig Creeger, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"></img>
                                    </div>
                                    <div class="fileMain">
                                        <h4>File Title</h4>
                                        <p>File info: Lorem ipsum - short description of item </p> 
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default Resources;