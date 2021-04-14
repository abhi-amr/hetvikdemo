import React, { Component } from "react";
import Qpaper from "../../components/Home/Qpaper";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "../../components/bootstrap.min.css";
import Heading from "../../components/Utilities/Heading"
import SignIn from "../../components/Login/SignIn"
import SignUp from "../../components/Login/SignUp"

class Practice extends Component {
    render() {
        return(
            <div className="home">            

<Container style={{padding:"1em"}} fluid>
            <Font family= "Londrina Solid">
              <Row>
                <Col>
                <Heading content="Contact Us" />
                </Col>
              </Row>
            <Row>
                <Col sm> <br/>

                    <Tabs defaultActiveKey="signIn" id="uncontrolled-tab-example">

                      <Tab eventKey="signIn" title="SignIn">
                        <SignIn />
                      </Tab>

                      <Tab eventKey="signUp" title="SignUp">
                        <SignUp />
                      </Tab>
                      
                    </Tabs>

                    
                    

                </Col>
            </Row>
            </Font>
        </Container>
                <br /> <br /> <br />
            </div>
            )
    }
}

export default Practice;

