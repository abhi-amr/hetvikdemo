import React, {Component} from 'react';
import {Form, Button, Card, Row, Col, Container} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import QFetched from '../../components/QPaper/QFetched';




class QFilter extends Component {
    constructor(){
        super();
        
        this.state = {
          programmeId : '',
          programmeName : '',
          subjectCode : '',
          subjectName : '',
          year : '',
          link : '',

          responseMessage : '',
          responseSuccess : false,
          responseError : ''
        };
       
      }


 onChangeHandler = (event) => {
  this.setState({
    [event.target.name] : event.target.value
  });
}

handleSubmit = (event) =>{
   event.preventDefault();

    this.setState({
        link : '../../images/pag19.pdf'
    });
}


  render(){
      const {programmeId, subjectCode, year } = this.state;
    return (
        <Container fluid>
            <Font family="Roboto">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                    <Col sm>
                        <Form.Group  controlId="formGroupUniversity">
                            <Form.Label>University</Form.Label>
                            <Form.Control placeholder="Patna University"  readOnly/>
                        </Form.Group>
                    </Col>
                    <Col sm>
                        <Form.Group controlId="formGridProgram">
                            <Form.Label>Program</Form.Label>
                            <Form.Control as="select" name="programmeId" defaultValue="" value={programmeId} onChange= {this.onChangeHandler}>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm>
                        <Form.Group controlId="formGridSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control as="select" name="subjectCode" defaultValue="" value={subjectCode} onChange= {this.onChangeHandler}>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm>
                        <Form.Group controlId="formGridYear">
                            <Form.Label>Year</Form.Label>
                            <Form.Control as="select" name="year" defaultValue="" value={year} onChange= {this.onChangeHandler}>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    </Form.Row>
                    
                    <Button variant="primary" type="submit">
                        Get
                    </Button>
                </Form>
        <hr />
        <Row><Col><h3>{this.state.programmeName}</h3></Col></Row>
        <Row><Col><h3>{this.state.subjectName}</h3></Col></Row>
        <Row><Col><h3>{this.state.year}</h3></Col></Row>
        <QFetched pdflink='http://www.africau.edu/images/default/sample.pdf'/>
        <br/>
        </Font>
        </Container>
        
    );
  }
}

export default QFilter;

