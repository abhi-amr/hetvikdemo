import React, {Component} from 'react';
import {Container, Col, Row, Carousel} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/fa';
import GoalsMission from "../../components/AboutUs/GoalsMission";
import Team from "../../components/AboutUs/Team";
import WhoWeAre from "../../components/AboutUs/WhoWeAre";



class AboutUs extends Component {
  render(){
    return (
      <Container fluid style={{padding:"2em"}}>
          <Row>
              <Col>

                <Container>
                    <Row>
                        <Col><h1>About Us</h1></Col>
                    </Row>
                    <Row>
                        <Col>
                        <GoalsMission/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h1>Our Team</h1>
                        <Team />
                  
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h1>How we can help</h1>
                        <WhoWeAre />
                        </Col>
                    </Row>
                </Container>  




              </Col>
          </Row>
      </Container>
    
    );
  }
}

export default AboutUs;