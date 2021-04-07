import React, {Component} from 'react';
import {Container, Col, Row, Carousel} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/fa';
import GoalsMission from "../../components/AboutUs/GoalsMission";
import FullTeam from "../../components/AboutUs/FullTeam";
import CoreTeam from "../../components/AboutUs/CoreTeam";




class AboutUs extends Component {
  render(){
    const hStyle = {
      width: '100%', 
      textAlign: 'center', 
      borderBottom: '1px solid #efefef',
      lineHeight: '0.1em',
      margin: '10px 0 20px' 
   } 
   
    const hSpan = { 
          background:'#fff',
          padding:'0 10px' 
      }

    return (
      <Container style={{padding:"1em"}}>

          <br /> <br />
          <Text family= "Rubik" className="text-center"><h1 style={hStyle}><span style={hSpan}><strong>About Us</strong></span></h1></Text>
          <br />
          <GoalsMission />

          <br /> <br /> <br />
          <Text family= "Rubik" className="text-center"><h1 style={hStyle}><span style={hSpan}><strong>Our Team</strong></span></h1></Text>
          <br />
          <FullTeam />


      </Container>
    
    );
  }
}

export default AboutUs;