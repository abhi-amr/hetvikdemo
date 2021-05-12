import React, { useState, useEffect } from "react";
import PdfView from "./PdfView";

const EntrancePaper = () => {
  const [entranceField, setEField] = useState({
    programmeId: "",
    programmeName: "",
    year: "",
    link: "",
  });
  /*api call for programs*/
  const [prg, setPrg] = useState([]);
  const prgGet = () => {
    console.log("%cEntrancePaper.jsx line:13 ", "color: #007acc;");
    let url =
      "https://hetvikbackapi.azurewebsites.net/api/PatnaUniversity/ProgrammeListForEntrance";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPrg(json);
      });
  };
  useEffect(() => {
    prgGet();
  }, []);
  /*Api call for Year*/
  const [year, setYear] = useState([]);
  const yearGet = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    let keyvalue = event.target.options[selectedIndex].getAttribute("data-key");
    setEField((prevalue) => {
      return {
        ...prevalue,
        programmeId: keyvalue,
      };
    });
    const url =
      "https://hetvikbackapi.azurewebsites.net/api/PatnaUniversity/" +
      keyvalue +
      "/EntranceYear";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setYear(json);
      });
  };
  const getPaper = () => {
    const url = "https://hetvikbackapi.azurewebsites.net/api/File/GetPaper";
    const data = {
      programmeId: entranceField.programmeId,

      year: Number(entranceField.year),
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
        if (
          entranceField.programmeId == "" ||
          entranceField.subjectCode == "" ||
          entranceField.year == ""
        ) {
          alert("Please Select the Options Properly.");
        } else if (json.urlWithSasToken == null) {
          alert("Question Paper Not Found");
        } else {
          setEField((prevalue) => {
            return {
              ...prevalue,
              link: json.urlWithSasToken[0],
            };
          });
        }
      });
  };
  const onChangeHandler = (event) => {
    setEField((prevalue) => {
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
    setEField((prevalue) => {
      //every time we select a program we need to sure that
      // previous value of subject and year get erased.
      return {
        ...prevalue,
        year: "",
        link: "",
      };
    });

    onChangeHandler(event);
    yearGet(event);
  };
  return (
    <>
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputUniversity">University</label>
              <input
                type="text"
                className="form-control"
                id="inputUniversity"
                placeholder="Patna University"
                readOnly
                required="true"
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputProgram">Program</label>
              <select
                id="inputProgram"
                name="programmeName"
                value={entranceField.programmeName}
                className="form-control"
                onChange={prgTwoCalls}
                required="true"
              >
                <option selected>Choose...</option>
                {prg.map((value) => (
                  <option key={value.id} data-key={value.id} value={value.name}>
                    {value.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="inputYear">Year</label>
              <select
                id="inputYear"
                name="year"
                value={entranceField.year}
                className="form-control"
                onChange={onChangeHandler}
              >
                <option selected>Choose...</option>
                {year.map((value) => (
                  <option key={value} data-key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-info">
            Find
          </button>
        </form>
        <hr />
        <br />
        <br />
        <h3 className="text-center">{entranceField.programmeName}</h3>
        <h3 className="text-center">{entranceField.year}</h3>

        <PdfView pdfLink={entranceField.link} />
      </div>
      <br />
    </>
  );
};

export default EntrancePaper;
