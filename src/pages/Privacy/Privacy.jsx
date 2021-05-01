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
            <meta name="description" content="Privacy" />
        </Helmet>
            
        <PrivacyPolicy />
        </Font>
        
    );
  }
}

export default Privacy;

