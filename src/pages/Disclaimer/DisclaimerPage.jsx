import React, {Component} from 'react';
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import Disclaimer from '../../components/Legal/Disclaimer'


class DisclaimerPage extends Component {
  render(){
    return (
        <Font family="Roboto">
            
        <Disclaimer />
        </Font>
        
    );
  }
}

export default DisclaimerPage;

