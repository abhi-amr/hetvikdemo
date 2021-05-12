import React, {Component} from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import { FaInstagram, FaFacebook, FaTwitter, FaCopyright } from 'react-icons/fa';
import './Footer.css';
import {Link} from 'react-router-dom';


class Footer extends Component {
  render(){
    return (
      
      <Container fluid style={{padding : "1em", backgroundColor: "#282c34", color :"white"}}>
      <Row>
        <Col sm={4}>

          <Container>
            <Row>
              <Col><Text family = "Roboto"><h2><strong><Link className="link" to="/">HETVIK</Link></strong></h2></Text></Col>
            </Row>
            <Row>
              <Col><Text family= "Montserrat"><p>The true friend during your exams</p></Text></Col>
            </Row>
          </Container>

        </Col>
        <Col sm={8}>

            <Container>
              <Row>
                <Col><Text family = "Roboto"><h3>Our Company</h3></Text></Col>
                
                <Container>
                  <Row>
                        <Text family = "Roboto" color ="white">
                        <Col><Link className="link" to="/">Home</Link></Col>
                        <Col><Link className="link" to="/about">About</Link></Col>
                        <Col><Link className="link" to="/team">Team</Link></Col>
                        </Text>
                      {/* <Col><Button variant="light">More Info</Button></Col> */}
                      <Col><Link className = "btn btn-light" to="/contact">Contact Us</Link></Col>
                      
                    <Col>
                    <Container>
                      <Row>
                        <Col><Text family = "Roboto"><h4>Newsletter</h4></Text></Col>
                      </Row>
                      <Row>
                        <Col><a href="https://www.instagram.com/hetvik.in/" className="link"><FaInstagram /></a></Col>
                        <Col><a href="https://www.facebook.com/hetvik.in" className="link"><FaFacebook /></a></Col>
                        <Col><a href="https://twitter.com/HetvikTeam" className="link"><FaTwitter /></a></Col>
                      </Row>
                    </Container>
                    </Col>
                  </Row>
                </Container>

              </Row>
            </Container>

        </Col>
      </Row>
      <Row><Col><Text family="Balsamiq Sans"><center>
        <p>
          <Link className="link" to="/privacy">Privacy Policy</Link>  | 
          <Link className="link" to="/terms">  Terms and Conditions</Link>  | 
          <Link className="link" to="/disclaimer">  Disclaimer</Link>
        </p></center></Text></Col></Row>
      <Row><Col><Text family="Open sans"><center><p>hetvik <FaCopyright/> 2021</p></center></Text></Col></Row>
    </Container>
    
    );
  }
}

export default Footer;