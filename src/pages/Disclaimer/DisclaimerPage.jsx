import React, {Component} from 'react';
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import Disclaimer from '../../components/Legal/Disclaimer';
import {Helmet} from "react-helmet";


class DisclaimerPage extends Component {
  render(){
    return (
        <Font family="Roboto">

        <Helmet>
            <title>Disclaimer | Hetvik</title>
            <meta name="description" content="Disclaimer" />
        </Helmet>
        
        <Disclaimer />
        </Font>
        
    );
  }
}

export default DisclaimerPage;

