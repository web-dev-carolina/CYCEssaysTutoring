import React from 'react';
import { Navbar, Nav, Button, Image, NavDropdown } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import { Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing.jsx';
import Registration from '../pages/Registration.jsx';
import Resources from '../pages/Resources.jsx';

const NavbarContainer = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" variant="light" className="navbar enriq" expand="md" collapseOnSelect>
        <Image src={require('../assets/cutTheWriteStory.png')} height='50px' />
        <Navbar.Brand className="mr-auto logo-nav ibarra"> &ensp; The Write Story</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={HLink} to="/#introsection">Home</Nav.Link>
            <Nav.Link as={HLink} to="/#aboutsection">About</Nav.Link>
            <Nav.Link as={HLink} to="/#workshopsection">Workshop Info</Nav.Link>
            <Nav.Link as={HLink} to="/#newTestimonialSection">Testimonials</Nav.Link>
            <Nav.Link as={HLink} to="/#contactsection">Contact</Nav.Link>
            <Nav.Link as={HLink} to="resources">Resources</Nav.Link>
            {/* links aren't navigating to the right page/section */}
          </Nav>

          <Button as={HLink} to="registration" variant="dark" className="ml-auto">Schedule</Button>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path='/registration' component={Registration} />
        <Route path='/resources' component={Resources} />
      </Switch>
    </>
  )
};

export default NavbarContainer;