import React, {Component} from 'react';
import {CardGroup, CardDeck, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/fa';

import CoreTeam from './CoreTeam';



class FullTeam extends Component {
  render(){
    return (
        <Container style={{padding:"1em"}}>
            <Row>
                <Col>
                    <CoreTeam />
                </Col>
            </Row>

            <Row>
                <Col>
                <CardDeck>
                    
                </CardDeck>
                </Col>
            </Row>
            
        </Container>
    );
  }
}

export default FullTeam;