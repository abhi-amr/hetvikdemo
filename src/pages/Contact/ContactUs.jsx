import React, { Component } from "react";
import {
  CardGroup,
  CardDeck,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Font, { Text } from "react-font";
import {} from "react-icons/im";
import {} from "react-icons/bs";
import {} from "react-icons/gr";
import RequestPaper from "../../components/ContactUs/RequestPaper";
import Feedback from "../../components/ContactUs/Feedback";
import Cus from "../../components/ContactUs/Cus";

class ContactUs extends Component {
  render() {
    return (
      <Container style={{ padding: "1em" }}>
        <Font family="Akaya Kanadaka">
          <Row>
            <Col>
              <h2>Didnt find your question paper</h2>
              <h2>Request your paper now</h2>
              {/* <RequestPaper />
              <Feedback /> */}
              <Cus />
            </Col>
          </Row>
        </Font>
      </Container>
    );
  }
}

export default ContactUs;
