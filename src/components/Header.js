import React, {Component} from 'react';
import {Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

class Header extends Component{
  render() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">hetvik</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Sign in</Button>
                </Form>
            </Navbar>
            
        </div>
    );
  }
}

export default Header;