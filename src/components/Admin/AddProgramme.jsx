import React, {Component} from "react";
import {Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import CustomAlert from "../../components/CustomAlert";
import endpoint from "../axios";


class AddProgrammeForm extends Component{
 constructor(){
   super();
   
   this.state = {
     id : '',
     name : '',
     level : '',
     durationInMonths : 36,
     currentAffliation : "Permanent",
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
  
  this.setState({
    responseMessage : "Program Added",
    responseSuccess : true
  });
}


 handleSubmit = (event) =>{
   event.preventDefault();

   //const API_ENDPOINT = "https://hetvikbackapi.azurewebsites.net/api/";

   const data = {
    "id" : this.state.id,
    "name" : this.state.name,
    "level" : this.state.level,
    "durationInMonths" : Number(this.state.durationInMonths),
    "currentAffliation" : this.state.currentAffliation
  }

   endpoint.post("PatnaUniversity/AddProgramme", data)
   .then(res => {
     console.log(res.data);
     this.setState({
       responseMessage : res.data.message,
       responseSuccess : res.data.success,
//changing to default value
      id : '',
      name : '',
      level : '',
      durationInMonths : 36,
      currentAffliation : "Permanent",

     });

     console.log(this.state);
   })



 }

 

  render(){
    const {id, name, level, durationInMonths, currentAffliation, responseMessage, responseSuccess} = this.state;
    
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridId">
                  <Form.Label>Programme Id</Form.Label>
                  <Form.Control type="text" placeholder="" 
                    name="id" value= {id} onChange = {this.onChangeHandler}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Programme Name</Form.Label>
                  <Form.Control type="text" placeholder="" 
                  name="name" value= {name} onChange = {this.onChangeHandler}/>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridDuration">
                  <Form.Label>Programme Duration (in Months)</Form.Label>
                  <Form.Control name="durationInMonths" value= {durationInMonths} onChange = {this.onChangeHandler}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLevel">
                  <Form.Label>Level</Form.Label>
                  <Form.Control as="select" name="level" defaultValue="" value={level} onChange= {this.onChangeHandler}>
                    <option value="">Choose...</option>
                    <option value="Under Graduate">Under Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Doctoral">Doctoral</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAffliation">
                  <Form.Label>Current Affliation</Form.Label>
                  <Form.Control as="select" name="currentAffliation" defaultValue="" value={currentAffliation} onChange= {this.onChangeHandler}>
                    <option value="Permanent">Permanent</option>
                    <option value="Temporary">Temporary</option>
                  </Form.Control>
                </Form.Group>

              </Form.Row>

              <Button variant="primary" type="submit">
                Add
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

export default AddProgrammeForm;
