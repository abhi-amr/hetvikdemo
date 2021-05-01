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
            <meta name="description" content="Terms and Conditions" />
        </Helmet>
            
        <TermsConditions />
        </Font>
        
    );
  }
}

export default TermsAndCondtions;

