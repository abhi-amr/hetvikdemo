import React, {Component} from 'react';
import {Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/im';
import {  } from 'react-icons/bs';
import {  } from 'react-icons/gr';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QFilter from '../../components/QPaper/QFilter';
import QFetched from '../../components/QPaper/QFetched';
import GoalsMission from "../../components/AboutUs/GoalsMission";



class Question extends Component {
  render(){
    return (
        <Font family="Roboto">
            <Router>
            <Container fluid>
            <Row>
              <Col lg={9} md={9} sm={12}>
                <h1>Get your paper</h1>
                <QFilter />
              </Col>

              {/* For Google Adsense */}
              <Col></Col>

            </Row>
            </Container>
              

                <Switch >
                    {/* <Route path = "/questions/filter" exact component= {GoalsMission}/> */}
                </Switch>

            </Router>
        
        </Font>
        
    );
  }
}

export default Question;

