import React, { Component } from "react";
import Qpaper from "../../components/Home/Qpaper";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "../../components/bootstrap.min.css";
import Heading from "../../components/Utilities/Heading"
import Login from "../../components/Login/Login"

class SignIn extends Component {
    render() {
        return(
            <div className="home">            

                <Container>
                {/* <Heading content="Log Me In" /> */}
                <Login />
                
                
                </Container>

                <br /> <br /> <br />
            </div>
            )
    }
}

export default SignIn;

