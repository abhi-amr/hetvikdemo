import React, { Component } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import Font, { Text } from "react-font";

const QFilter = () => {
  return (
    <>
      <Card>
        <Font family="Roboto">
          <Card.Header></Card.Header>
          <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button> */}
            <h1>Get your Paper, here</h1>
            <br />
            <Form>
              <Form.Row>
                <Col sm>
                  <Form.Group controlId="formGroupUniversity">
                    <Form.Label>University</Form.Label>
                    <Form.Control placeholder="Patna University" readOnly />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group controlId="formGridProgram">
                    <Form.Label>Program</Form.Label>
                    <Form.Control as="select" defaultValue="">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group controlId="formGridSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control as="select" defaultValue="">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group controlId="formGridYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control as="select" defaultValue="">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>

              <Button variant="secondary" type="submit">
                Get
              </Button>
            </Form>
          </Card.Body>
        </Font>
      </Card>
    </>
  );
};

export default QFilter;
