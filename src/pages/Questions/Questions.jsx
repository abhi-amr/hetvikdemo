import React, {Component} from 'react';
import {Form, Button, Card, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/im';
import {  } from 'react-icons/bs';
import {  } from 'react-icons/gr';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QFilter from '../../components/QPaper/QFilter';
import GoalsMission from "../../components/AboutUs/GoalsMission";



class Question extends Component {
  render(){
    return (
        <Font family="Roboto">
            <Router>
                <QFilter />
                <Switch >
                    {/* <Route path = "/questions/filter" exact component= {GoalsMission}/> */}
                </Switch>

            </Router>
        
        </Font>
        
    );
  }
}

export default Question;

