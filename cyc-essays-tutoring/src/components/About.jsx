import React from 'react'

const About = () => {
    return (
        <div className="container" id="about">
            <div className="motto-wrap">
                <div className="label cc-light">About</div>
                <div className="heading-jumbo-small">Nulla vel sodales tellus, quis condimentum enim.
                            Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
                            Aliquam erat volutpat. Vestibulum ac
                    <br></br>
                </div>
            </div>
            <div className="divider">
            </div>
            <div className="home-content-wrap">
                <div className="w-layout-grid about-grid">
                <div id="w-node-76c147234d34-15c47b42">
                    <img src="https://uploads-ssl.webflow.com/5f82810dd032426467606c98/5f82810daca6c94597c47b66_placeholder%203.svg" id="w-node-76c147234d3f-15c47b42" alt="">
                        </img>
                        <div className="home-section-wrap">
                            <div className="label cc-light">About</div>
                            <h2 className="section-heading">Who we are</h2>
                            <p className="paragraph-light">Nulla vel sodales tellus, quis condimentum enim.
                            Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo.
                            Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida
                                     tellus ut consequat.</p>
                        </div>
                        <a href="/about" className="button w-inline-block">
                            <div>Learn More</div>
                        </a>
                    </div>
                    
                </div>
                <div className="w-layout-grid about-grid cc-about-2">
                    <div id="w-node-76c147234d41-15c47b42">
                    
                        <div className="home-section-wrap">
                            <div className="label cc-light">Team</div>
                            <h2 className="section-heading">What we do</h2>
                            <p className="paragraph-light">Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat.
                            Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.
                                                         </p>
                        </div>
                        <a href="/team" className="button w-inline-block">
                            <div>Learn More</div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}

export default About;