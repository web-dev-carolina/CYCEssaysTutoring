import React from 'react';
import powerofpen from './powerofpen.svg';
import Card from 'react-bootstrap/Card';
import './About.css';

const About = () => {
    return (
        <div className="container" id="about">
            <div className='about-container'>
                <h2 className='about-heading'>
                    About
                </h2>
                <div class="pg1-2-txt">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
                            parturient montes, nascetur ridiculus 
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
                <Card style={{width:'18rem'}}>
                    <Card.Title>Title goes here</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor.  </Card.Text>
                </Card>
                <Card style={{width:'18rem'}}>
                    <Card.Title>
                        Title goes here
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor.  
                    </Card.Text>
                </Card>
            </div>
            <div class="space">
                <img src={powerofpen} alt="pen image" className="img" />
            </div>

        </div>
    

    );
}

export default About;