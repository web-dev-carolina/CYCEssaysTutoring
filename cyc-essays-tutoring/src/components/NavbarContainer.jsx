import React from 'react';
import { Navbar, Nav,  Button,  } from 'react-bootstrap';

const NavbarContainer = () => {
  return (
    
    <Navbar sticky="top" bg="light" variant="light" class="navbar">
            <Navbar.Brand  className="mr-auto logo-nav">CYC</Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link href="#Intro">Home</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
        <Nav.Link href="#pricing">Resources</Nav.Link>
      </Nav>
      <Button variant="dark" className="ml-auto">Schedule</Button>
    </Navbar>
  )
};
export default NavbarContainer;