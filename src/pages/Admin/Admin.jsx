import React, {Component} from 'react';
import {Container, Col, Row, Carousel} from 'react-bootstrap';
import Font, { Text } from 'react-font';
import {  } from 'react-icons/fa';
import UploadPaper from "../../components/Admin/UploadForm";
import AddProgramme from "../../components/Admin/AddProgramme";
import AddSubject from "../../components/Admin/AddSubject";


class AboutUs extends Component {
  render(){
    return (
      <Container fluid>
          <Row>
              <Col>
                <h1>Add Programme</h1>
              </Col>
          </Row>
          <hr />
          <Row>
              <Col>
                <AddProgramme/>
              </Col>
          </Row>
          <br /><br />
          <Row>
              <Col>
                <h1>Add Subject</h1>
              </Col>
          </Row>
          <hr />
          <Row>
              <Col>
                <AddSubject/>
              </Col>
          </Row>
      </Container>
    
    );
  }
}

export default AboutUs;