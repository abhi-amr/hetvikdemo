import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Background from '../../images/Corousel/demo1.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import "../bootstrap.min.css";

class Home extends Component {
    render() {
        const myStyle = {
            backgroundImage: `url("${Background}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPsition: 'center',
            backgroundSize: 'cover',
            width:'100%',
            height: '100vh',
            color: 'white'
        }

        return(
            <div style={myStyle} className="">
                <Container>
                    <Row>
                        <Col>
                        <h1>Your true friend</h1>
                        </Col>
                        <Col>
                        <Link className="btn btn-success">Find</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            )
    }
}

export default  Home;