import React, {Component} from 'react';
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import TermsConditions from '../../components/Legal/TermsConditions';
import {Helmet} from "react-helmet";


class TermsAndCondtions extends Component {
  render(){
    return (
        <Font family="Roboto">

        <Helmet>
            <title>Terms and Conditions | Hetvik</title>
            <meta name="description" content="These terms and conditions outline the rules and regulations for the use of Hetvik's Website, located at https://hetvik.in/. By accessing this website we assume you accept these terms and conditions. Do not continue to use Hetvik if you do not agree to take all of the terms and conditions stated on this page." />
            <link rel="canonical" href="https://hetvik.in/terms" />
        </Helmet>
            
        <TermsConditions />
        </Font>
        
    );
  }
}

export default TermsAndCondtions;

