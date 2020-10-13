import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'


const Intro = () => {
    return (
            <Jumbotron className="bg-container">
                
                <div className="bg-image">
                <div className="jumbotronText">
                    <h1 className='jumbo-title'>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
            </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </div>
                </div>
            </Jumbotron>
    );
}
export default Intro;