import React, {Component} from 'react';
import {Container, Col, Row, Carousel} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/fa';
import GoalsMission from "../../components/AboutUs/GoalsMission";
import FullTeam from "../../components/AboutUs/FullTeam";
import CoreTeam from "../../components/AboutUs/CoreTeam";
import Heading from "../../components/Utilities/Heading"
import {Helmet} from "react-helmet";


class AboutUs extends Component {
  render(){
    return (
      <Container style={{padding:"1em"}}>
          <Helmet>
              <title>About Us | Hetvik</title>
              <meta name="description" content="We are group of enthusiast who dont want students to suffer things that we did" />
              <link rel="canonical" href="https://hetvik.in/about" />
          </Helmet>
          
          <Heading content="About Us" />
          <GoalsMission />

          <Heading content="Our Team" />
          <FullTeam />


      </Container>
    
    );
  }
}

export default AboutUs;