import React, {Component} from 'react';
import {Form, Button, Card, Col, Alert} from 'react-bootstrap';
import Font from 'react-font';
import endpoint from "../axios";




class Feedback extends Component {

    constructor(){
        super();
        
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            university : 'Patna University',
            programmeName : '',
            mobileNo : '',
            batch : '',
            message : '',

            success : false,
            disabled : false,
            loading : false,
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
            "mobileNo" : this.state.mobileNo,
            "batch" : Number(this.state.batch)
       }
     
        endpoint.post("Mail/FeedbackResponse", data)
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
                mobileNo : '',
                batch : '',
                message : ''
            
            });
        
        })
     
     
     
    }




  render(){
    const {firstName, lastName, email, message, batch, university, mobileNo, programmeName, responseMessage, success, disabled, loading} = this.state;
    return (
        <Card>
            <Font family="Comfortaa">
            <Card.Header>Help us improve. Leave a suggestion !</Card.Header>
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
                        <Form.Label>Course Enrolled In</Form.Label>
                        <Form.Control defaultValue="" placeholder="(Optional)"
                        name="programmeName" value= {programmeName} onChange = {this.onChangeHandler} />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group  as={Col}  controlId="formGroupSubject">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control placeholder="(Optional)" pattern=".{0}|.{10,10}"
                        name="mobileNo" value= {mobileNo} onChange = {this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group  as={Col}  controlId="formGroupYear">
                        <Form.Label>Batch</Form.Label>
                        <Form.Control placeholder="20xx" 
                        name="batch" value= {batch} onChange = {this.onChangeHandler}/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="Textarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Your Suggestions / Queries"
                        name="message" value= {message} onChange = {this.onChangeHandler}/>
                    </Form.Group>
                    
                    <Button variant="info" type="submit" disabled={disabled}>
                        Send
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
                    Your feedback is valuable to us. Thank You.
                    </Alert>}

            </Card.Body>
            </Font>
        </Card>
        
    );
  }
}

export default Feedback;

