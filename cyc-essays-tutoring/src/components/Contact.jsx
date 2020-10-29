import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className="container mb-5 row mr-auto ml-auto">
                <div className="col-xs-12 col-md-6">
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
            <div className="col-xs-12 col-md-6">
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

    )
}

export default Contact;