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
import Heading from "../../components/Utilities/Heading"
import {Helmet} from "react-helmet";


class ContactUs extends Component {
  render(){
    return (
        <Container style={{padding:"1em"}} fluid>
          <Helmet>
              <title>Contact Us | Hetvik</title>
              <meta name="description" content="Leave a feedback or request a paper" />
          </Helmet>

            <Font family= "Londrina Solid">
              <Row>
                <Col>
                <Heading content="Contact Us" />
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
