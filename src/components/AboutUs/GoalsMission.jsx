import React, {Component} from 'react';
import {CardGroup, CardDeck, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import { ImDatabase } from 'react-icons/im';
import { BsFillPeopleFill, BsExclude } from 'react-icons/bs';
import { GrAchievement } from 'react-icons/gr';




class GoalsMission extends Component {
  render(){
    return (
        <Container style={{padding:"1em"}}><Font family= "Akaya Kanadaka">
            <Row>
                <Col>
                <CardGroup>
                    <Card className="text-center">
                        {/* <Card.Img variant="top" src="" /> */}
                        <Text className="text-center" style={{fontSize:"3em", color:""}}><BsExclude/></Text>
                        <Card.Body>
                        <Card.Title ><h2>Our Mission</h2></Card.Title>
                        <Card.Text>
                            Our mission is to provide you with all the assets you need to excel in your university exams.
                        </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="text-center">
                        {/* <Card.Img variant="top" src="" /> */}
                        <Text className="text-center" style={{fontSize:"3em", color:""}}><BsFillPeopleFill/></Text>
                        <Card.Body>
                        <Card.Title><h2>Our Values</h2></Card.Title>
                        <Card.Text>
                            To give every student an opportunity to prove themselves
                        </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    </CardGroup>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                <CardGroup>
                    <Card>
                        {/* <Card.Img variant="top" src="" /> */}
                        <Text className="text-center" style={{fontSize:"3em", color:""}}><GrAchievement/></Text>
                        <Card.Body>
                        <Card.Title><h2>Our Dream</h2></Card.Title>
                        <Card.Text>
                            We are on the way of building a platform which will be a one stop for all the exams preparations.
                        </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card className="text-center">
                        {/* <Card.Img variant="top" src="" /> */}
                        <Text className="text-center" style={{fontSize:"3em", color:""}}><ImDatabase/></Text>
                        <Card.Body>
                        <Card.Title><h2>Our Goals</h2></Card.Title>
                        <Card.Text>
                            To be improved and be more inspiring every single day
                        </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    </CardGroup>
                </Col>
            </Row>
            </Font>
        </Container>
    );
  }
}

export default GoalsMission;