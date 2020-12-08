import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Resources.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const Resources = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
      
    
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
                    <Col className="d-md-inline-block col-md-8 col-sm-4">
                        <div className="resource-text d-none d-sm-block">
                            <h1 className="d-none d-sm-block display-1 font-weight-normal ibarra-resources">Resources</h1>
                            {/* <h3 className="d-md-none display-3 font-weight-normal">Resources</h3> */}
                        </div>
                        <div className="resource-text d-sm-block">
                            {/* <h1 className="d-none d-md-block display-1 font-weight-normal">Resources</h1> */}
                            <h3 className="d-sm-none display-4 font-weight-normal ibarra">Resources</h3>
                        </div>
                    </Col>
                </div>
            </Row>
            </div>
            <div className="course-resources resource-section container-fluid">
            <h1 className="display-4 text-center font-weight-light enriq">Course Resources</h1>
            <Row>
                <div className="card-deck">
                    <div className="card shadow" onClick="handleFirstResource">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg" alt="File:Closed Book Icon.svg"/>
                        <div className="card-body">
                            <h5 className="card-title">Textbook: Ace the SAT Essay</h5>
                            <p className="card-text">How to master the timed writing process by Dana L. Lebo, PHD</p>
                            <a className="text-right" href="https://www.amazon.com/Ace-SAT-Essay-Writing-Process/dp/1934442380/ref=cm_cr_pr_product_top" target="_blank" rel="noopener noreferrer">Textbook link...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/0/02/201807_book_B.svg" alt="File:201807 book B.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Course Material: Binder Inserts</h5>
                            <p className="card-text">Everything you need for the virtual workshop from example essay questions to detailed material. Please see the link below to view the pdf.</p>
                            <a className="text-right" href="https://drive.google.com/file/d/1fLLwhCnbLHwI9Jlo69-j0-lcoLOWPnoi/view?usp=sharing" target="_blank" rel="noopener noreferrer">View PDF...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Magnifying_glass_icon_mgx2.svg" alt="File:Magnifying glass icon mgx2.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Virtual Workshop Overview</h5>
                            <p className="card-text">For the first time in history, most colleges have dropped the requirement for standardized test scores.  Due to the pandemic, they are turning instead to the personal essay as one of the biggest factors in college admission...</p>
                            <a className="text-right" href="https://drive.google.com/file/d/1D129pO3aVhQYBK4os4kg6tfvfQ1I9pZz/view?usp=sharing" target="_blank" rel="noopener noreferrer">Read more...</a> 
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                </div>

            </Row>
            </div>
            <Col>
            <div className="news-container resource-section container-fluid">
            <h1 className="display-4 text-center font-weight-light enriq">News Articles</h1>
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
                            <a className="text-right" href="https://drive.google.com/file/d/1R2DbMxonuT_ujHnTgwCGU8MAOxc25rbR/view?usp=sharing" target="_blank" rel="noopener noreferrer">Read more...</a> 
                            {/* change href to new gdocs link once Dr.Lebo adds a pdf version of this publisher file. */}
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/5/57/130-man-student-2.svg" alt="File:130-man-student-2.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Workshop Helps Students Write Winning College Applications</h5>
                            <p className="card-text">And Build Competency in a Much-Valued Leadership Skill</p>
                            <a className="text-right" href="https://drive.google.com/file/d/1w8TcqPFx6IqEsUbGLcrvICYP8M6iBiWA/view?usp=sharing" target="_blank" rel="noopener noreferrer">Read more...</a>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    <div className="card shadow">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Noun_62811_-_Achieve.svg" alt="Achieve.svg" />
                        <div className="card-body">
                            <h5 className="card-title">Making a Hard-Life Story Open a Door to College</h5>
                            <p className="card-text">By Sara Rimer: Antoine Tate, 16, was sitting in a courtyard at Howard University in the heat of a July</p>
                            <a className="text-right" href="https://www.nytimes.com/2007/07/27/education/27college.html">Read more...</a>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                    
                    <div className="card shadow">

                        <img className="responsive card-img-top facemask" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTk0Ljk0IDM3MC41Ny0uMDctLjA0di0uMDFjLjAyLjAzLjA1LjA1LjA3LjA1eiIgZmlsbD0iIzA0MzAzZSIvPjxnPjxnPjxwYXRoIGQ9Im00NjEuNjcgMzU3LjEyM2MwIDEwLjYtMi40NyAyMC42Mi02Ljg4IDI5LjUzLS43MiAxLjQ3LTEuNSAyLjkyLTIuMzUgNC4zMy0uODUgMS40My4yNi0uMjI1LS42OSAxLjEzNWwtMTMuNTggMTEuNTU1LTE3MC44Ny0yMS4yMS0xMS4zLTI3LjE5LTQ5LjQyLTE1Ny4xMSA0OS40Mi0xODkuMzZjNS40OCAyLjM2IDEwLjcxIDUuMTYgMTUuNjUgOC4zNi4wNy4wMi4xMy4wNy4xOS4xMSAxNS40NyA5LjA2IDI4LjI1IDIyLjIxIDM2Ljg2IDM3Ljk3IDEwLjYyLTMuOTcgMjIuMTItNi4xNSAzNC4xMi02LjE1IDUzLjg3IDAgOTcuNTMgNDMuNjcgOTcuNTMgOTcuNTMgMCAxMy4yMi0yLjYzIDI1LjgyLTcuNCAzNy4zMS0xNy45MyAzOS4xNS0zMC42OCA5Ni40NCA5LjQ1IDEyNi4zMSAxMS45MSAxMi4wNCAxOS4yNyAyOC42MSAxOS4yNyA0Ni44OHoiIGZpbGw9IiMwNDMwM2UiLz48cGF0aCBkPSJtMjU2IDguODAzdjM0Ni40N2wtMTEuMTcgMjYuNDJoLTEzMS43NGwtMTQuNDUtOC44OC0zLjctMi4yN2MtLjAyIDAtLjA1LS4wMi0uMDctLjA1LTIzLjA4LTE4LjI4LTM3Ljg4LTQ2LjU4LTM3Ljg4LTc4LjM0IDAtMjQuNSA5LjQ1LTQ2LjUyIDIzLjg2LTY1LjkzIDE2LTIxLjU1IDI2LjYtNDQuODkgMjkuMDItNzEuOTUgMi42OC0yOS43OS03LjA4LTU5LjUxIDQuMjItODguMTUgMTUuMTktMzguNjggNTMuNzYtNjYuMTIzIDk4Ljk0LTY2LjEyMyAxNS4zIDAgMjkuODQgMy4xMjMgNDIuOTcgOC44MDN6IiBmaWxsPSIjMDc0ODVlIi8+PC9nPjxnPjxnPjxwYXRoIGQ9Im0zMDUuNDIgMzYxLjAzMy0zNC40NDkgNDUuNzk2LTE0Ljk3MSA4LjI3OS0xNi42Mi03NS44NzUgMTYuNjItNDYuOTYgNy40Ny0xMS4xN2gzNC41OWw1LjkxIDUuMDgtLjA5IDY1LjMzeiIgZmlsbD0iI2UyYTY2ZiIvPjxwYXRoIGQ9Im0yNTYgMjkyLjI3M3YxMjIuODM3bC0xNC45OC04LjA5Ny0zNC40NC00NS45OCAxLjU0LTkuNTJ2LTY1LjU3MWMuMDEgMCAuMDEuMDEuMDIuMDFsNS43OS00LjgyOWgzNC42eiIgZmlsbD0iI2YxYmE4NyIvPjwvZz48Zz48Zz48cGF0aCBkPSJtNTEyIDUxMmgtMjU2bC0yNC43MDgtNTMuMDI1IDI0LjcwOC00My44NjYgMTQuOTExLTguMjYyIDg1LjAyMi4wMzIgMTUuNjE3IDguMjM0LTEyLjA0Mi0xMi4zMjR2LTQ0LjkzNmwxMi4wNDItMi40OWM4MC4zNyAxNi4wMiAxNDAuNDUgODAuMDY3IDE0MC40NSAxNTYuNjM3eiIgZmlsbD0iI2IyZDdmMyIvPjxwYXRoIGQ9Im0zNzEuNTUgMzU1LjM2M3Y1OS43NWwtMTE1LjU1LS4wMDYgNDcuODgtNjMuNTk0YzIyLjg2NS0uMDYgNDUuMjItLjQ1IDY3LjY3IDMuODV6IiBmaWxsPSIjZjVmMmYxIi8+PC9nPjxnPjxwYXRoIGQ9Im0wIDUxMmgyNTZ2LTk2Ljg5MWwtMTQuOTI5LTguMjMxLTg1LjAwNC4wMDItMTUuNjE3IDguMjM0IDEyLjA0Mi0xMi4zMjR2LTQ0LjkzNmwtMTIuMDQyLTIuNDljLTgwLjM3IDE2LjAxOS0xNDAuNDUgODAuMDM3LTE0MC40NSAxNTYuNjM2eiIgZmlsbD0iI2Q2ZTlmOCIvPjxwYXRoIGQ9Im0xNDAuNDUgMzU1LjM2My4wMSA1OS43MzYgMTE1LjU0LjAwOS00Ny44OC02My41OTRjLTIyLjg2NC0uMDc2LTQ1LjIyLS40NTEtNjcuNjcgMy44NDl6IiBmaWxsPSIjZmJmYWZhIi8+PC9nPjxnPjxnPjxnPjxnPjxwYXRoIGQ9Im0xMDMuMDI0IDQ1OS41OTZoMzB2NTIuNDA0aC0zMHoiIGZpbGw9IiNiMmQ3ZjMiLz48L2c+PC9nPjxnPjxwYXRoIGQ9Im0zNzkuMjg1IDQ1OS41OTZoMzB2NTIuNDA0aC0zMHoiIGZpbGw9IiM5NWM3ZWUiLz48L2c+PC9nPjwvZz48Zz48cGF0aCBkPSJtMjcxIDQxNS4xMDd2OTYuODkzaC0xNWwtNy4wODUtNDQuMjggNy4wODUtNTIuNjEzeiIgZmlsbD0iI2Q2ZTlmOCIvPjxwYXRoIGQ9Im0yNDEgNDE1LjEwN2gxNXY5Ni44OTNoLTE1eiIgZmlsbD0iI2VjZjlmZCIvPjwvZz48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9Im0zMzcuNyAxOTkuMTYzLTkuNjQgMTUuNzloLTU5LjIzbC0xMi44My0xNS43OS4wMS0uMDFoLS4wMWwtMjMuNy02MS4yMiAyMy43LTc1LjkxaDIxLjZjMjcuMDMgMCA0OS45IDE3Ljg1IDU3LjQ1IDQyLjQgMS43MiA1LjYgMi42NCAxMS41NCAyLjY0IDE3Ljd2NzcuMDN6IiBmaWxsPSIjZTJhNjZmIi8+PHBhdGggZD0ibTI1NiAxOTkuMTUzaC0uMDJsLjAyLjAxLTEwLjA1IDE1Ljc5aC01Ni40NGwtMTQuNzMtMTUuNzl2LTc3LjA0YzAtNi4xNi45Mi0xMi4xIDIuNjUtMTcuNyA3LjU1LTI0LjU1IDMwLjQxLTQyLjQgNTcuNDQtNDIuNGgyMS4xM3oiIGZpbGw9IiNmMWJhODciLz48L2c+PGc+PHBhdGggZD0ibTMzNy42OTUgMTk5LjE2M3YzMy4wMWMwIDIzLjczLTEzLjc1IDQ0LjI1LTMzLjcyIDU0LjAxLTguMDE0IDQuMDEzLTE3LjQwNiA2LjA5LTI2LjQ3IDYuMDloLTIxLjUwNWwtMjMuNjk2LTU1Ljg4OCAyMy42OTEtMzcuMjIyeiIgZmlsbD0iI2NlZTFlNCIvPjxwYXRoIGQ9Im0xNzQuNzggMTk5LjE2M2g4MS4yMnY5My4xMWgtMjEuMjJjLTEuMTQgMC0yLjI4LS4wMy0zLjQtLjEtOC4wOS0uNDctMTUuNzYtMi41My0yMi42OC01Ljg5LTIwLjA4LTkuNzMtMzMuOTItMzAuMzEtMzMuOTItNTQuMTF6IiBmaWxsPSIjZTVlYWVlIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==" alt="Facemask"/>
                        <div className="card-body">
                            <h5 className="card-title">College Admissions in a Covid Year: SATs Are Out, Personal Stories Are In</h5>
                            <p className="card-text">By Douglas Belkin: Memo to high-school seniors applying to selective colleges: A high score on your SAT is out. A Covid-19 epiphany is in.</p>
                            <a className="text-right" href="https://www.wsj.com/articles/college-admissions-in-a-covid-year-sats-are-out-personal-stories-are-in-11600315272">Read more...</a>
                        </div>
                        <div className="card-footer">
                        </div>
                    </div>
                </div>
            </Row>
            </div>
            </Col>
        </div>
        
    );
}


export default Resources;