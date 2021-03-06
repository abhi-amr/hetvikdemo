import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../android-chrome-512x512.png"

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            {/* <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Hetvik logo"
          /> */}
            <Link className="navbar-brand" to="/">
              <strong>hetvik</strong>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link className="nav-link" to="/questions">
                  Questions
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </Nav.Link>

              {/* <NavDropdown title="Years" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">2020</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">2019</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">2018</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Course</NavDropdown.Item>
                  </NavDropdown> */}

            </Nav>
            {/* <Nav>
                  <Nav.Link><Link className = "btn btn-light" to="/login">Sign In</Link></Nav.Link>
                </Nav> */}
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}

export default Header;
