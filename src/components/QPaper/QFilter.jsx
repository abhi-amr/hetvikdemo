import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import Font, { Text } from "react-font";
import QFetched from "./QFetched";
import PdfView from "./PdfView";
import { useLocation } from "react-router";



const QFilter = () => {
  const location = useLocation();
  const quickLinkData = location.state;
  const [quickLinkField, setQLField] = useState({
    programmeId: "",
    programmeName: "",
    subjectCode: "",
    subjectName: "",
    year: "",
    link: "",
  });

  const quickLinkCall = () => {
    if (quickLinkData == undefined) {
      console.log("quickLinkData is undefined");
    } else {
      setQLField((prevalue) => {
        return {
          ...prevalue,
          programmeName: quickLinkData.programmeName,
          programmeId: quickLinkData.programmeId,
          subjectCode: quickLinkData.subCode,
          subjectName: quickLinkData.subName,
          year: quickLinkData.year,
        };
      });
      getQuickLinkPaper();
    }
  };

  /* API call for question paper from quick link. */
  const getQuickLinkPaper = () => {
    const url = "https://hetvikbackapi.azurewebsites.net/api/File/GetPaper";
    const data = {
      programmeId: quickLinkData.programmeId,
      subjectCode: quickLinkData.subCode,
      year: Number(quickLinkData.year),
    };
    const params = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, params)
      .then((response) => response.json())
      .then((json) => {
        if (json.urlWithSasToken == null) {
          alert("Question Paper Not Found");
        } else {
          setQLField((prevalue) => {
            return {
              ...prevalue,
              link: json.urlWithSasToken[0],
            };
          });
        }
      });
  };
  const [field, setField] = useState({
    programmeId: "",
    programmeName: "",
    subjectCode: "",
    subjectName: "",
    year: "",
    link: "",
  });
  /*api call for programs*/
  const [prg, setPrg] = useState([]);
  const prgGet = () => {
    let url =
      "https://hetvikbackapi.azurewebsites.net/api/PatnaUniversity/Programme";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPrg(json);
      });
  };
  useEffect(() => {
    prgGet();
    quickLinkCall();
  }, []);
  /*Api call for subjects*/
  const [sub, setSub] = useState([]);
  const subGet = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    let keyvalue = event.target.options[selectedIndex].getAttribute("data-key");
    setField((prevalue) => {
      return {
        ...prevalue,
        programmeId: keyvalue,
      };
    });

    const url =
      "https://hetvikbackapi.azurewebsites.net/api/PatnaUniversity/" +
      keyvalue +
      "/Subject";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setSub(json);
        setYear([]); //if there are any previous value in year field
      });
  };

  /*Api call for Year*/
  const [year, setYear] = useState([]);
  const yearGet = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    let keyvalue = event.target.options[selectedIndex].getAttribute("data-key");
    setField((prevalue) => {
      return {
        ...prevalue,
        subjectCode: keyvalue,
      };
    });
    const url =
      "https://hetvikbackapi.azurewebsites.net/api/PatnaUniversity/" +
      keyvalue +
      "/Year";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setYear(json);
      });
  };

  /* API call for question paper. */
  const getPaper = () => {
    const url = "https://hetvikbackapi.azurewebsites.net/api/File/GetPaper";
    const data = {
      programmeId: field.programmeId,
      subjectCode: field.subjectCode,
      year: Number(field.year),
    };
    const params = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    console.log("%cQFilter.jsx line:161 data", "color: #007acc;", data);
    console.log("%cQFilter.jsx line:162 field", "color: #007acc;", field);
    fetch(url, params)
      .then((response) => response.json())
      .then((json) => {
        if (
          field.programmeId == "" ||
          field.subjectCode == "" ||
          field.year == ""
        ) {
          alert("Please Select the Options Properly.");
        } else if (json.urlWithSasToken == null) {
          alert("Question Paper Not Found");
        } else {
          setField((prevalue) => {
            return {
              ...prevalue,
              link: json.urlWithSasToken[0],
            };
          });
        }
      });
  };

  const onChangeHandler = (event) => {
    setField((prevalue) => {
      return {
        ...prevalue,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getPaper();
  };
  const prgTwoCalls = (event) => {
    setQLField((prevalue) => {
      //every time we select a program we need to sure that
      // previous value of quickLinkField get erased.
      return {
        programmeId: "",
        programmeName: "",
        subjectCode: "",
        subjectName: "",
        year: "",
        link: "",
      };
    });
    setField((prevalue) => {
      //every time we select a program we need to sure that
      // previous value of subject and year get erased.
      return {
        ...prevalue,
        subjectCode: "",
        subjectName: "",
        year: "",
        link: "",
      };
    });
    onChangeHandler(event);
    subGet(event);
  };
  const subTwoCalls = (event) => {
    setField((prevalue) => {
      //every time we select new subject we need to sure that
      // previous value of year get erased.
      return {
        ...prevalue,
        year: "",
      };
    });
    onChangeHandler(event);
    yearGet(event);
  };

  return (
    <>
      <Container fluid>
        <Font family="Roboto">
          <Form onSubmit={handleSubmit}>
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
                  <Form.Control
                    as="select"
                    name="programmeName"
                    defaultValue=""
                    value={field.programmeName}
                    onChange={prgTwoCalls}
                    required="true"
                  >
                    <option selected>Choose Program</option>
                    {prg.map((prog) => (
                      <option
                        key={prog.id}
                        data-key={prog.id}
                        value={prog.name}
                      >
                        {prog.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group controlId="formGridSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    as="select"
                    name="subjectName"
                    defaultValue=""
                    value={field.subjectName}
                    onChange={subTwoCalls}
                    required="true"
                  >
                    <option selected>Choose Subject</option>
                    {sub.map((prog) => (
                      <option
                        key={prog.id}
                        data-key={prog.id}
                        value={prog.name}
                      >
                        {prog.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group controlId="formGridYear">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    as="select"
                    name="year"
                    defaultValue=""
                    value={field.year}
                    onChange={onChangeHandler}
                    required="true"
                  >
                    <option>Year</option>
                    {year.map((prog) => (
                      <option key={prog} data-key={prog} value={prog}>
                        {prog}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Button variant="info" type="submit">
              Find
            </Button>
          </Form>
          <hr />
          <Row>
            <Col>
              <h3>
                {field.programmeName}
                {quickLinkField.programmeName}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
                {field.subjectName}
                {quickLinkField.subjectName}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
                {field.year}
                {quickLinkField.year}
              </h3>
            </Col>
          </Row>

          <PdfView pdfLink={quickLinkField.link + field.link} />

          <br />
        </Font>
      </Container>
    </>
  );
};

export default React.memo(QFilter);
