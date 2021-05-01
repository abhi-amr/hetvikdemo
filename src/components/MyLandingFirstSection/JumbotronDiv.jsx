import React, { Component } from 'react';
import "./JumbotronDiv.css";
import {Jumbotron, Container, Form} from 'react-bootstrap';
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
                        <Text italic={true} style={{fontSize: "30px"}}>
                        Platform designed for the student by the student.
                        </Text>
                        <Link className="btn btn-success" to="/questions">Get Started</Link>
                    </Container>
                </Jumbotron>
                </Font>

            </div>
        )
    }
}
