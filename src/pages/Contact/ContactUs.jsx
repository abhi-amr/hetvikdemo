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
    return (
        <Container style={{padding:"1em"}} fluid>
            <Font family= "Akaya Kanadaka">
            <Row>
                <Col>
                <img src={teamChat}
                />
                </Col>
                <Col>

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