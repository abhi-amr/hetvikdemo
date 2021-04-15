import React, {Component} from 'react';
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import TermsConditions from '../../components/Legal/TermsConditions'


class DisclaimerPage extends Component {
  render(){
    return (
        <Font family="Roboto">
            
        <TermsConditions />
        </Font>
        
    );
  }
}

export default DisclaimerPage;

