import React from 'react';
import powerofpen from './powerofpen.svg';
import Card from 'react-bootstrap/Card';
import './About.css';

const About = () => {
    return (
        <div className="container mb-5 row mr-auto ml-auto" id="about">
            <div style={{ height:'110%'}} className='col-xs-12 col-md-6 '>
                <h2 className='about-heading mb-3'>
                    About
                </h2>
                <div className="">
                
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
                parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                <div className='mt-5 mb-3'></div>
                Description of what the workshop is.
                </div>
                <div className='container mt-5'>
                <Card style={{width:'15rem', height:'15rem'}} className='left p-2'>
                    <Card.Img variant='top' className='icon' src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Pencil_icon_vector.svg'/>
                    <Card.Title>Title goes here</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor.  </Card.Text>
                </Card>
                <Card style={{width:'15rem', height:'15rem'}} className=' p-2'>
                    <Card.Img variant='top' className='icon' src='https://upload.wikimedia.org/wikipedia/commons/1/1b/Pencil_icon_vector.svg'/>
                    <Card.Title>
                        Title goes here
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor.  
                    </Card.Text>
                </Card>
                </div>
            </div>
            <div className="col-xs-12 col-md-6">
                <img src={powerofpen} alt="pen image" className="mt-5 mb-5 img-fluid rounded" />
            </div>

        </div>
    

    );
}

export default About;