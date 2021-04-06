import React, {Component} from 'react';
import {CardGroup, CardDeck, Card, Container, Row, Col, Tab, Tabs} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/im';
import {  } from 'react-icons/bs';
import {  } from 'react-icons/gr';
import RequestPaper from '../../components/ContactUs/RequestPaper';
import Feedback from '../../components/ContactUs/Feedback';
import OpenedLetter from '../../images/Contact/openedLetter.svg';
import ManOpenedLetter from '../../images/Contact/manOpeningLetter.svg';
import WomanChat from '../../images/Contact/womanChat.svg';
import teamChat from '../../images/Contact/teamChat.svg';




class ContactUs extends Component {
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
        <Container style={{padding:"1em"}} fluid>
            <Font family= "Londrina Solid">
              <Row>
                <Col>
                <br /> <br />
                <Text family= "Rubik" className="text-center"><h1 style={hStyle}><span style={hSpan}><strong>Contact Us</strong></span></h1></Text>
                <br /><br />
                </Col>
              </Row>
            <Row>
                <Col sm>
                <img className=" w-100"
                src={teamChat}
                alt= "We are listening"
                />
                </Col>
                <Col sm> <br/>

                    <Tabs defaultActiveKey="request" id="uncontrolled-tab-example">

                      <Tab eventKey="request" title="Request Paper">
                        <RequestPaper />
                      </Tab>

                      <Tab eventKey="feedback" title="Give Feedback">
                        <Feedback />
                      </Tab>
                      
                    </Tabs>

                    
                    

                </Col>
            </Row>
            </Font>
        </Container>
    );
  }
}

export default ContactUs;