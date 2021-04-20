import React, {Component} from 'react';
import {Container, Col, Row, Carousel} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/fa';
import GoalsMission from "../../components/AboutUs/GoalsMission";
import FullTeam from "../../components/AboutUs/FullTeam";
import CoreTeam from "../../components/AboutUs/CoreTeam";
import Heading from "../../components/Utilities/Heading"



class AboutUs extends Component {
  render(){
    return (
      <Container style={{padding:"1em"}}>

          <Heading content="About Us" />
          <GoalsMission />

          <Heading content="Our Team" />
          <FullTeam />


      </Container>
    
    );
  }
}

export default AboutUs;