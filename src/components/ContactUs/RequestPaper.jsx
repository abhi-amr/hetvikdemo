import React, {Component} from 'react';
import {Form, Button, Card, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/im';
import {  } from 'react-icons/bs';
import {  } from 'react-icons/gr';
import endpoint from "../axios";
import CustomAlert from "../CustomAlert";



class RequestPaper extends Component {
    constructor(){
        super();
        
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            university : 'Patna University',
            programmeName : '',
            subject : '',
            year : '',
            message : '',

            responseSuccess : '',
            responseMessage : ''

        };
       
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
     
        //const API_ENDPOINT = "https://hetvikbackapi.azurewebsites.net/api/";
     
        const data = {
            "firstName" : this.state.firstName,
            "lastName" : this.state.lastName,
            "email" : this.state.email,
            "message" : this.state.message,
            "university" : this.state.university,
            "programmeName" : this.state.programmeName,
            "subject" : this.state.subject,
            "year" : Number(this.state.year)
       }
     
        endpoint.post("Mail/RequestPaperResponse", data)
        .then(res => {
            console.log(res.data);
            this.setState({
                responseMessage : res.data.message,
                responseSuccess : res.data.success,
            //changing to default value//do down here
                firstName : '',
                lastName : '',
                email : '',
                university : 'Patna University',
                programmeName : '',
                subject : '',
                year : '',
                message : ''
            
            });

            console.log(this.state);
        
        })
     
     
     
    }



  render(){
    const {firstName, lastName, email, message, subject, university, year, programmeName, responseMessage, responseSuccess} = this.state;

    return (
        <Card>
            <Font family="Comfortaa">
            <Card.Header>Didnt find what you were looking for? Request here!</Card.Header>
            <Card.Body>
                {/* <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button> */}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGroupFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="" 
                            name="firstName" value= {firstName} onChange = {this.onChangeHandler} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGroupLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="" 
                            name="lastName" value= {lastName} onChange = {this.onChangeHandler} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="someone@domain.com" 
                        name="email" value= {email} onChange = {this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col}  controlId="formGroupUniversity">
                        <Form.Label>University</Form.Label>
                        <Form.Control placeholder="Patna University"  readOnly
                        name="university" value= {university} onChange = {this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Programme/Course</Form.Label>
                        <Form.Control  defaultValue="" 
                        name="programmeName" value= {programmeName} onChange = {this.onChangeHandler} />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group  as={Col}  controlId="formGroupSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder="" 
                        name="subject" value= {subject} onChange = {this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group  as={Col}  controlId="formGroupYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control placeholder="20xx" 
                        name="year" value= {year} onChange = {this.onChangeHandler}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="Textarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Optional" 
                        name="message" value= {message} onChange = {this.onChangeHandler}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Request
                    </Button>
                </Form>
                {/* <CustomAlert success={responseSuccess} message={this.state.responseMessage}/> */}
            </Card.Body>
            </Font>
        </Card>
        
    );
  }
}

export default RequestPaper;

