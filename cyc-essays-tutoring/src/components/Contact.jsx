import React from 'react'
import './testimonials.css'

const Contact = () => {
    return (
        <div className="container">
            <div className="home-section-wrap">
                <div class="text-holder left">
                    <div class="pg1-2-txt">
                        
                        <div class="space">
                            <h2 className="section-heading">Contact</h2>
                            <p className="paragraph-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
                            parturient montes, nascetur ridiculus 
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                </div>
                <div class="text-holder right">
                    <div class="pg1-2-txt">
                        <div class="space">
                        <form>
                            <p>Your name</p>
                            <input
                            type="text"
                            />
                            <p>Email</p>
                            <input
                            type="text"
                            />
                            <p>Message</p>
                            <input
                            type="text"
                            />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Contact;