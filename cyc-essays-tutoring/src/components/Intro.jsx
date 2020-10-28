import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';


const Intro = () => {
    return (
            <Jumbotron className="bg-container ">
                
                <div className="bg-image mt-0">
                <div className="jumbotronText">
                    <Row>                        <div className='col-xs-12 col-md-6'></div>
</Row>
                    <Row>
                        <div className='col-xs-12 col-md-6'>
                    <h1 className='jumbo-title p-5 m-auto text-center'>Introduce Your Product
                    <br></br> Quickly & Effectively </h1>
                    <div className='p-2 m-auto text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus libero elit, in lacinia eros rutrum vel. Nullam pulvinar felis non molestie elementum. Ut commodo augue at lacus maximus, non tristique nunc iaculis. Donec ante enim, sagittis in imperdiet eu, consequat sed nisi. In hac habitasse platea dictumst. Aliquam ut mauris sed ligula pretium auctor. Donec at orci mollis, imperdiet dui dignissim, lacinia velit. Integer et ultricies magna. Suspendisse pellentesque volutpat orci, at iaculis ipsum sodales at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vitae turpis lacus. Phasellus vitae risus odio. In quam nisi, euismod vitae sapien vel, consectetur viverra nisl. Ut non tincidunt tortor. Suspendisse potenti. Sed ac tincidunt erat. </div>
                                        
                    </div>
                    </Row>
                </div>
                </div>
            </Jumbotron>
    );
}
export default Intro;