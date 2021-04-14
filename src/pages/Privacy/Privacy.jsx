import React, {Component} from 'react';
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import PrivacyPolicy from '../../components/Legal/PrivacyPolicy'


class Privacy extends Component {
  render(){
    return (
        <Font family="Roboto">
            
        <PrivacyPolicy />
        </Font>
        
    );
  }
}

export default Privacy;

