import React, {Component} from 'react';
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import PrivacyPolicy from '../../components/Legal/PrivacyPolicy';
import {Helmet} from "react-helmet";


class Privacy extends Component {
  render(){
    return (
        <Font family="Roboto">
        
        <Helmet>
            <title>Privacy | Hetvik</title>
            <meta name="description" content="At Hetvik, accessible from https://hetvik.in/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Hetvik and how we use it." />
            <link rel="canonical" href="https://hetvik.in/privacy" />
        </Helmet>
            
        <PrivacyPolicy />
        </Font>
        
    );
  }
}

export default Privacy;

