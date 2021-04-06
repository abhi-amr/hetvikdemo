import React, {Component} from 'react';
import {Form, Button, Card, Row, Col} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/im';
import {  } from 'react-icons/bs';
import {  } from 'react-icons/gr';




class RequestPaper extends Component {
  render(){
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
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGroupFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGroupLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="someone@domain.com" />
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col}  controlId="formGroupUniversity">
                        <Form.Label>University</Form.Label>
                        <Form.Control placeholder="Patna University"  readOnly/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Program</Form.Label>
                        <Form.Control as="select" defaultValue="Select...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group  as={Col}  controlId="formGroupSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder="" />
                    </Form.Group>
                    <Form.Group  as={Col}  controlId="formGroupYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control placeholder="20xx" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="Textarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Optional"/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Request
                    </Button>
                </Form>
            </Card.Body>
            </Font>
        </Card>
        
    );
  }
}

export default RequestPaper;

