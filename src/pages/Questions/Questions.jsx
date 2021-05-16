import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Font from "react-font";
import QFilter from "../../components/QPaper/QFilter";
import Heading from "../../components/Utilities/Heading";
import { Helmet } from "react-helmet";
import EntrancePaper from "../../components/QPaper/EntrancePaper";

const Question = () => {
  const [arrowOne, setArrowOne] = useState(true);
  const [arrowTwo, setArrowTwo] = useState(false);

  const mystyleText = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  };

  return (
    <>
      <Font family="Roboto">
        <Helmet>
          <title>Questions | Hetvik</title>
          <meta name="description" content="Find Your Paper here" />
          <link rel="canonical" href="https://hetvik.in/questions" />
        </Helmet>

        <Container>
          <Row>
            <Col>
              <Heading content="Get Your Paper Here !" />
              <div className="accordion " id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        style={mystyleText}
                        className="btn btn-link btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onClick={() => {
                          setArrowOne(!arrowOne);
                          setArrowTwo(false);
                        }}
                      >
                        {arrowOne ? (
                          <i class="fas fa-caret-down"></i>
                        ) : (
                          <i class="fas fa-caret-right"></i>
                        )}
                        &nbsp; Academic Question Paper
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <QFilter />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        style={mystyleText}
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        onClick={() => {
                          setArrowOne(false);
                          setArrowTwo(!arrowTwo);
                        }}
                      >
                        {arrowTwo ? (
                          <i class="fas fa-caret-down"></i>
                        ) : (
                          <i class="fas fa-caret-right"></i>
                        )}
                        &nbsp; Entrance Question Paper
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <EntrancePaper />
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* For Google Adsense */}
            {/* <Col></Col> */}
          </Row>
          <br/><br/><br/><br/>
        </Container>
      </Font>
    </>
  );
};

export default Question;
