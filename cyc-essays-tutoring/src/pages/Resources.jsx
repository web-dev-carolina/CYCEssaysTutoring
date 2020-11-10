import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Resources.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const Resources = () => {
    return (
        <div className="resources-container container">
            <div className="resource-heading resource-section container-fluid">
            <Row className="title-header">
                <div>
                    <Col className="inline-x col-4">
                    <div className="image-container">
                        <img className="computer" src="https://upload.wikimedia.org/wikipedia/commons/7/70/Hands_typing_on_white_laptop_scene.svg" alt="File:Hands typing on white laptop scene.svg"></img>
                    </div>
                    </Col>
                    <Col className="inline-x col-8">
                        <div className="resource-text">
                            <h1 className="display-1 font-weight-normal">Resources</h1>
                        </div>
                    </Col>
                </div>
            </Row>
            </div>
            <div className="course-resources resource-section container-fluid">
            <h1 className="display-4 text-center font-weight-light">Course Resources</h1>
            <Row>
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

            </Row>
            </div>
            <div className="news-container resource-section container-fluid">
            <h1 className="display-4 text-center font-weight-light">News Articles</h1>
            <Row>
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

            </Row>
            </div>
        </div>
    );
}

export default Resources;