import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Header extends Component{
  render() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home"><strong>hetvik</strong></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Questions</Nav.Link>
                  <NavDropdown title="Years" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">2020</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">2019</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">2018</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Course</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Request</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    About
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            
        </div>
    );
  }
}

export default Header;