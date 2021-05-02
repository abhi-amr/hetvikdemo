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
            <meta name="description" content="All the information on this website - https://hetvik.in/ - is published in good faith and for general information purpose only. Hetvik does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Hetvik), is strictly at your own risk. Hetvik will not be liable for any losses and/or damages in connection with the use of our website." />
            <link rel="canonical" href="https://hetvik.in/disclaimer" />
        </Helmet>
        
        <Disclaimer />
        </Font>
        
    );
  }
}

export default DisclaimerPage;

