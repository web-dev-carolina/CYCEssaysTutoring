import React from 'react';
import { Navbar, Nav, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import { Route, Switch} from 'react-router-dom';
import Landing from '../pages/Landing.jsx';
import Registration from '../pages/Registration.jsx';
import Resources from '../pages/Resources.jsx';


const NavbarContainer = () => {

  return (
    <>
      <Navbar sticky="top" bg="light" variant="light" className="navbar">
        <Navbar.Brand className="mr-auto logo-nav">CYC</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={HLink} to="/#about">About</Nav.Link>
          <Nav.Link as={HLink} to="/#contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="resources">Resources</Nav.Link>
        </Nav>
        <Button as={Link} to="registration" variant="dark" className="ml-auto">Schedule</Button>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path='/registration' component={Registration}/>
        <Route path='/resources' component={Resources}/>
      </Switch>
    </>
  )
};

export default NavbarContainer;