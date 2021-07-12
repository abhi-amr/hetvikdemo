import React, { Component } from 'react';
import { CardGroup, CardDeck, Card, Container, Row, Col } from 'react-bootstrap';
import Font, { Text } from 'react-font';
import { } from 'react-icons/fa';
// import anand from '../../images/Avatar/avatar2.jpg';
// import narayan from '../../images/Avatar/avatar3.jpg';
import kumar from '../../images/Avatar/kumar.png';
// import anand from '../../images/Avatar/abhishekAd.svg';
import narayan from '../../images/Avatar/rupesh.png';
// import kumar from '../../images/Avatar/abhishekKr.svg';
import anand from '../../images/Avatar/anand.png';
import rahul from '../../images/Avatar/rahul.png';



class CoreTeam extends Component {
    render() {
        return (
            <Container style={{ padding: "1em" }}>
                <Row>
                    <Col>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src={anand} />
                                <Card.Body>
                                    <Card.Title>Abhishek Anand</Card.Title>
                                    <Card.Text>
                                        <Text family="Caveat"><em>2019 Batch<br /> Patna Science College</em></Text>
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
                                        <Text family="Caveat"><em>2019 Batch<br /> Patna Science College</em></Text>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Developer, Hetvik</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={kumar} />
                                <Card.Body>
                                    <Card.Title>Abhishek Kumar</Card.Title>
                                    <Card.Text>
                                        <Text family="Caveat"><em>2019 Batch<br /> Patna Science College</em></Text>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Co-Founder, Hetvik</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={rahul} />
                                <Card.Body>
                                    <Card.Title>Rahul Raj</Card.Title>
                                    <Card.Text>
                                        <Text family="Caveat"><em>2019 Batch<br /> Patna Science College</em></Text>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Marketing, Hetvik</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CoreTeam;