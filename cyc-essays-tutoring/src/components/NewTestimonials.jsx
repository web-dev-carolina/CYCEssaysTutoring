import React from 'react';
import ReactDOM from 'react-dom';
import './NewTestimonials.css';
import Carousel from 'react-bootstrap/Carousel'

function Testimonials() {
    return (
        <div id="newTestimonialSection" className="testimonials">
            <div className="wrapper">
                <div className="title">
                    <h1>Testimonials</h1>
                </div>
                <div className="content">
                    <Carousel>
                        <Carousel.Item>
                        The Carolina Homelessness Prevention Initiative has been a wonderful organization to work with. They provide a great service for the 
                        community and are extremely professional in how they run their organization. We are grateful for the impact that they have made in our community 
                        and are looking forward to continuing our partnership.
                        <Carousel.Caption>
                                <h3></h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        CHPI is a phenomenal organization. They provide a niche service and have mastered their craft. 
                        We appreciate everything they have done for us and are excited for what the future of our relationship will look like.
                        <Carousel.Caption>
                                <h3></h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        The impact that the Carolina Homelessness Prevention Initiative has had on the local Chapel Hill community has been astonishing. 
                        We have seen the diversion rate drop significantly since they were established, and the trend is likely to continue. 
                        CHPI has also played a large role in helping mitigate the negative effects of COVID-19 in homelessness and have provided 
                        much needed support for this community during these tough times.
                        <Carousel.Caption>
                                <h3></h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;