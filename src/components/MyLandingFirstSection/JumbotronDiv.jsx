import React, { Component } from 'react';
import "./JumbotronDiv.css";
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Font, { Text } from 'react-font';

export default class JumbotronDiv extends Component {
    render() {
        return (
            <div>
                <Font family="Comfortaa">
                <Jumbotron fluid className="jumbotron-image text-white">
                    <Container fluid>
                        <br/><br/><br/>
                        <Text family="Comfortaa" weight="600" style={{fontSize: "60px"}}>HETVIK</Text>
                        <Text italic={true} style={{fontSize: "20px"}}>
                        Platform designed for the students by the students.
                        </Text>
                        <br/><br/><br/><br/>
                    </Container>
                    <Container>
                            <Row>
                                <Col>
                                    <Text family="Comfortaa"  style={{fontSize: "35px"}}><center><span className="stats">50+</span><br/>Papers</center></Text>
                                </Col>
                                <Col>
                                    <Text family="Comfortaa"  style={{fontSize: "35px"}}><center><span className="stats">1000+</span><br/>Questions</center></Text>
                                </Col>
                                <Col>
                                    <Text family="Comfortaa" style={{fontSize: "35px"}}><center><span className="stats">200+</span><br/>Pages</center></Text>
                                </Col>
                            </Row>
                            <br/><br/><br/>
                            <Row className="d-flex justify-content-center"><Link className="btn btn-success" to="/questions" style={{fontSize: "25px"}}>Get Started</Link></Row>
                    </Container>
                </Jumbotron>
                </Font>

            </div>
        )
    }
}
