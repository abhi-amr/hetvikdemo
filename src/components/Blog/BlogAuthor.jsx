import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Font from "react-font";
// import commonAvatar from "../../images/Avatar/common.png";

function BlogAuthor(props) {
  let [day, month, year] = props.date.split("-");
  let dateString = new Date(year, month - 1, day).toLocaleString("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  return (
    <>
      <Font family="Nunito">
        <Container fluid style={{ padding: "1em" }}>
          <Row>
            <Col>
              <img
                height="50px"
                width="50px"
                align="left"
                style={{ borderRadius: "50%" }}
                src={props.author.avatarImageLink}
              />
              {/* "https://image.freepik.com/free-vector/vector-avatar-smiling-man-facial-expression_102172-203.jpg" */}

              <span>
                &nbsp;{props.author.firstName + " " + props.author.lastName}
              </span>
              <br />
              <span className="text-muted">&nbsp;Edited {dateString}</span>
            </Col>
          </Row>
        </Container>
      </Font>
    </>
  );
}

export default BlogAuthor;
