import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Resources.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const Resources = () => {
    return (
        <div className="resources-container container">
            <div className="resource-heading resource-section container-fluid">
            <Row className="title-header justify-content-center">
                <div>
                    <Col className="inline-x col-md-4">
                    <div className="image-container text-center">
                        <img className="computer" src="https://upload.wikimedia.org/wikipedia/commons/7/70/Hands_typing_on_white_laptop_scene.svg" alt="File:Hands typing on white laptop scene.svg"></img>
                    </div>
                    </Col>
                    <Col className="inline-x col-md-8">
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
                    <div className="card shadow" onClick="handleFirstResource">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg" alt="File:Closed Book Icon.svg"/>
                        <div className="card-body">
                            <h5 className="card-title">Textbook: Ace the SAT Essay</h5>
                            <p className="card-text">How to master the timed writing process by Dana L. Lebo, PHD</p>
                            <a className="text-right" href="https://www.amazon.com/Ace-SAT-Essay-Writing-Process/dp/1934442380/ref=cm_cr_pr_product_top" target="_blank">Textbook link...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/0/02/201807_book_B.svg" alt="File:201807 book B.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Course Material: Binder Inserts</h5>
                            <p className="card-text">Everything you need for the virtual workshop from example essay questions to detailed material. Please see the link below to view the pdf.</p>
                            <a className="text-right" href="../styles/binder_inserts.pdf" target="_blank">View PDF...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Magnifying_glass_icon_mgx2.svg" alt="File:Magnifying glass icon mgx2.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Virtual Workshop Overview</h5>
                            <p className="card-text">For the first time in history, most colleges have dropped the requirement for standardized test scores.  Due to the pandemic, they are turning instead to the personal essay as one of the biggest factors in college admission...</p>
                            <a className="text-right" href="../styles/workshop_desc.pdf" target="_blank">Read more...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                </div>

            </Row>
            </div>
            <div className="news-container resource-section container-fluid">
            <h1 className="display-4 text-center font-weight-light">News Articles</h1>
            <Row>
                <div className="card-deck">
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Notebook_and_Pen_Flat_Icon_Vector.svg" alt="Notebook_and_Pen_Flat_Icon_Vector.svg" />
                        <div className="card-body">
                        <h5 className="card-title">The Almighty Essay</h5>
                            <p className="card-text">By Trip Gabriel: ON a freezing Saturday in February, my wife and I sat through a full-day introduction to college admissions for the parents of 11th graders.</p>
                            <a className="text-right" href="https://www.nytimes.com/2011/01/09/education/09guidance-t.html">Read more...</a>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/1/19/%D0%9C%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D0%B0.07.svg" alt="File: Woman.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Writing the Essay: Sound Advice from an Expert</h5>
                            <p className="card-text">By Parke Muth, Assistant Dean of Admission, University of Virginia</p>
                            <a className="text-right" href="..." target="_blank">Read more...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/5/57/130-man-student-2.svg" alt="File:130-man-student-2.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Workshop Helps Students Write Winning College Applications</h5>
                            <p className="card-text">And Build Competency in a Much-Valued Leadership Skill</p>
                            <a className="text-right" href="..." target="_blank">Read more...</a>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                </div>

            </Row>
            <Row>
                <div className="card-deck">
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Noun_62811_-_Achieve.svg" alt="Achieve.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Making a Hard-Life Story Open a Door to College</h5>
                            <p className="card-text">By SARA RIMER: Antoine Tate, 16, was sitting in a courtyard at Howard University in the heat of a July</p>
                            <a className="text-right" href="https://www.nytimes.com/2007/07/27/education/27college.html">Read more...</a>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    
                    <div className="card shadow">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                </div>

            </Row>

            </div>
        </div>
    );
}


export default Resources;