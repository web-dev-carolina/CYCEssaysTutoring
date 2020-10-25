import React from 'react'
import './testimonials.css'
import Pens from './testimonials1.png'
import Books from './testimonials2.png'
const Testimonials = () => {
    return(
        
        <div className="container">
            <div className="home-section-wrap">
                <h2 className="section-heading" >Testimonials</h2>
                <div class="text-holder right">
                    <div class="pg1-2-txt">
                        <div class="space">
                            <h2 className="section-heading">Some Testimonial</h2>
                            <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
                            parturient montes, nascetur ridiculus 
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                        <div class="space">
                            <img src={Books} alt="books" className="img"/>
                        </div>
                        
                    </div>
                </div>
                <div class="text-holder left">
                    <div class="pg1-2-txt">
                        <br></br><br></br><br></br>
                        <img src={Pens} alt="pens" className="img"/>
                        <div class="space">
                            <h2 className="section-heading">Another one</h2>
                            <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
                            parturient montes, nascetur ridiculus 
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                </div>    
            </div>
            
        </div>
        
    );
}

export default Testimonials;