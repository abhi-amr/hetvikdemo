import React, {Component} from 'react';
import {Form, Button, Card, Col, Alert, Spinner} from 'react-bootstrap';
import Font from 'react-font';
import endpoint from "../axios";




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
            mobileNo : '',
            message : '',

            success : false,
            responseMessage : '',
            disabled : false,
            loding : false

        };
       
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled : true,
            loading : true
        });
        //const API_ENDPOINT = "https://hetvikbackapi.azurewebsites.net/api/";
     
        const data = {
            "firstName" : this.state.firstName,
            "lastName" : this.state.lastName,
            "email" : this.state.email,
            "message" : this.state.message,
            "university" : this.state.university,
            "programmeName" : this.state.programmeName,
            "subject" : this.state.subject,
            "mobileNo" : this.state.mobilNo
       }
     
        endpoint.post("Mail/RequestPaperResponse", data)
        .then(res => {
            console.log(res.data);
            this.setState({
                responseMessage : res.data.message,
                success : res.data.success,
                disabled : false,
                loading : false,
            //changing to default value//do down here
                firstName : '',
                lastName : '',
                email : '',
                university : 'Patna University',
                programmeName : '',
                subject : '',
                mobileNo : '',
                message : ''
            
            });

            //console.log(this.state);
        
        })
     
     
     
    }



  render(){
    const {firstName, lastName, email, message, subject, university, mobileNo, programmeName, responseMessage, success, disabled, loading } = this.state;

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
                            name="firstName" value= {firstName} onChange = {this.onChangeHandler} required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGroupLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="" 
                            name="lastName" value= {lastName} onChange = {this.onChangeHandler} required/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="someone@domain.com" 
                        name="email" value= {email} onChange = {this.onChangeHandler} required/>
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
                        name="programmeName" value= {programmeName} onChange = {this.onChangeHandler} required/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group  as={Col}  controlId="formGroupSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder="(Optional)"  
                        name="subject" value= {subject} onChange = {this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group  as={Col}  controlId="formGroupYear">
                        <Form.Label>MobileNo</Form.Label>
                        <Form.Control placeholder=""  pattern=".{0}|.{10,10}"
                        name="mobileNo" value= {mobileNo} onChange = {this.onChangeHandler}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="Textarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Optional" 
                        name="message" value= {message} onChange = {this.onChangeHandler}/>
                    </Form.Group>
                    
                    <Button variant="info" type="submit" disabled={disabled}>
                        Request
                    </Button>
                    &nbsp;
                    {loading && <div
                        className="spinner-border ml-auto text-info"
                        role="status"
                        aria-hidden="true"
                        ></div> }
                </Form>
                
                {success && <Alert variant="success">
                    {/* {this.state.responseMessage} */}
                    Request recieved. Thank You.
                    </Alert>}
            </Card.Body>
            </Font>
        </Card>
        
    );
  }
}

export default RequestPaper;

