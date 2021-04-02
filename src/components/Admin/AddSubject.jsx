import React, {Component} from "react";
import {Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import CustomAlert from "../../components/CustomAlert";
import axios from "axios";

class AddSubject extends Component{
 constructor(){
   super();
   
   this.state = {
     id : '',
     name : '',
     type : '',
     responseMessage : "",
     responseSuccess : false,
     responseError : ""
   };
  
 }

 onChangeHandler = (event) => {
  this.setState({
    [event.target.name] : event.target.value
  });
}
 
logMeTheInfo = (event) => {
  event.preventDefault();
  console.log("lets see how much time it takes");
  console.log(this.state);
}


 handleSubmit = (event) =>{
   event.preventDefault();

   const API_ENDPOINT = "https://hetvikbackapi.azurewebsites.net/api/";

   const data = {
    "id" : this.state.id,
    "name" : this.state.name,
    "type" : this.state.type
  }

   axios.post(API_ENDPOINT + "PatnaUniversity/AddSubject", data)
   .then(res => {
     console.log(res.data);
     this.setState({
       responseMessage : res.data.message,
       responseSuccess : res.data.success
     });

     console.log(this.state);
   })



 }

 

  render(){
    const {id, name, type, responseMessage, responseSuccess} = this.state;
    
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridId">
                  <Form.Label>Subject Id / SubjectCode</Form.Label>
                  <Form.Control type="text" placeholder="" 
                    name="id" value= {id} onChange = {this.onChangeHandler}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Subject Name</Form.Label>
                  <Form.Control type="text" placeholder="" 
                  name="name" value= {name} onChange = {this.onChangeHandler}/>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                

                <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="select" name="type" defaultValue="" value={type} onChange= {this.onChangeHandler}>
                    <option value="">Choose...</option>
                    <option value="Core Course">Core Course (CC)</option>
                    <option value="Elective Course">Elective Course (EC)</option>
                    <option value="Generic Elective">Generic Elective (GE)</option>
                    <option value="Discipline Specific Elective Course">Discipline Specific Elective Course (DSE)</option>
                    <option value="Ability Enhancement Course">Ability Enhancement Course (AEC)</option>
                    <option value="Skill Enhancement Course">Skill Enhancement Course (SEC)</option>
                    <option value="Ability Enhancement Compulsory Course">Ability Enhancement Compulsory Course (AECC)</option>
                  </Form.Control>
                </Form.Group>

              </Form.Row>

              <Button variant="primary" type="submit">
                Add Subject
              </Button>
              {/* <Button variant="primary" type="" onClick={this.logMeTheInfo}>
                Log
              </Button> */}
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomAlert  success={responseSuccess} message={responseMessage}/>
          </Col>
        </Row>
      </Container>
    );
  }
  
}

export default AddSubject;
