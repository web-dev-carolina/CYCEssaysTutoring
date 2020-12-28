import React from 'react';
import '../styles/Testimonials.css';
import Carousel from 'react-bootstrap/Carousel'

function Testimonials() {
    return (
        <div id="newTestimonialSection" className="testimonials">
            <div className="wrapper">
                <div className="title">
                    <hr/>
                        <h1 className="ibarra-title">Testimonials</h1>
                        <hr/>
                    </div>
                <div className="content">
                    <div className="carousel-card shadow card">
                    <Carousel>
                        <Carousel.Item>
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            “My daughter finished the workshop with a well-written essay and had lots of fun in the process. She was
                            fortunate to get immediate positive feedback when she submitted it with her application to a competitive
                            program. The director of the program complimented her essay during the interview. I highly recommend
                            The Write Workshop.”
                            <Carousel.Caption>
                                <h3 className="carousel-caption"><em>Parent of Write Workshop Graduate</em></h3>
                            </Carousel.Caption>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            I had never been exposed to writing techniques like contrast and peak experience. I don’t think teachers
                            at school could even teach them as well as Dr. Lebo did! I learned that any type of writing work should
                            have a great hook and how to maintain their attention. I learned too much to put onto paper.
                            <Carousel.Caption>
                                <h3 className="carousel-caption"><em>K.M., Write Workshop Graduate</em></h3>
                            </Carousel.Caption>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            I learned about my own personal voice and how I can incorporate myself creatively and personally into
                            anything that I write. I found things that I can take with me for writing in the future.
                            <Carousel.Caption>
                            <h3 className="carousel-caption"><em>K.L., Write Workshop Graduate</em></h3>
                            </Carousel.Caption>
                        </div>
                        </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;