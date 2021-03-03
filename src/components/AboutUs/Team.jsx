import React, {Component} from 'react';
import {CardGroup, CardDeck, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/fa';
import anand from '../../images/Avatar/avatar2.jpg';
import narayan from '../../images/Avatar/avatar3.jpg';
import kumar from '../../images/Avatar/avatar1.jpg';



class Team extends Component {
  render(){
    return (
        <Container style={{padding:"1em"}}>
            <Row>
                <Col>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={anand} />
                        <Card.Body>
                        <Card.Title>Abhishek Anand</Card.Title>
                        <Card.Text>
                            "And so here we are, all the efforts and hardwork paid off and you know what it is still paying"
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Founder, Hetvik</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={narayan} />
                        <Card.Body>
                        <Card.Title>Rupesh Narayan</Card.Title>
                        <Card.Text>
                            "Work is worship"
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Developer</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={kumar} />
                        <Card.Body>
                        <Card.Title>Abhishek Kumar</Card.Title>
                        <Card.Text>
                            "Men agitat molem"
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Founder, Hetvik</small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default Team;