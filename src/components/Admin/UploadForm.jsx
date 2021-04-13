import React, { useEffect, useState } from "react";
import "./UploadForm.css";
import "../bootstrap.min.css";

const UploadForm = () => {
  const [field, setField] = useState({
    uniName: "Patna University",
    programmeName: "",
    programmeId: "",
    subName: "",
    subCode: "",
    examYear: "",
    totalQuestion: "",
    fullMarks: "",
    fileNo: "",
  });

  /*Api call for Programmes*/
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
  }, []);

  /*Api call for subject*/
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
      });
  };

  /*Function for getting subject CODE*/
  const subCodeGet = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    let keyvalue = event.target.options[selectedIndex].getAttribute("data-key");
    setField((prevalue) => {
      return {
        ...prevalue,
        subCode: keyvalue,
      };
    });
  };

  /*api call for uploading form data*/
  const sendForm = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("program", field.programmeId);
    formData.append("subject", field.subCode);
    formData.append("year", field.examYear);
    formData.append("fileNo", field.fileNo);
    formData.append("fullMarks", field.fullMarks);
    formData.append("totalQuestion", field.totalQuestion);
    const url = "https://hetvikbackapi.azurewebsites.net/api/File/UploadPaper";
    const params = {
      method: "POST",
      // headers: {
      //   "content-type": "multipart/form-data",
      // },
      body: formData,
    };
    fetch(url, params)
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          alert(json.message);
        } else {
          alert("Not Uploaded!!");
        }
      });
  };

  const inputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setField((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };

      //   if (name === "fname") {
      //     return { fName: value, lName: prevalue.lName };
      //   } else if (name === "lname") {
      //     return { fName: prevalue.fName, lName: value };
      //   }
    });
  };

  /*state for file*/
  const [selectedFile, setSelectedFile] = useState();
  const inputChangeFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("ok");
    sendForm();
  };

  const prgTwoCalls = (event) => {
    setField((prevalue) => {
      //every time we select a program we need to sure that
      // previous value of subject get erased.
      return {
        ...prevalue,
        subCode: "",
        subName: "",
      };
    });
    inputChange(event);
    subGet(event);
  };
  const subTwoCalls = (event) => {
    inputChange(event);
    subCodeGet(event);
  };

  //   const handleDragEnter = (e) => {
  //     e.preventDefault();
  //     console.log("drag enter");
  //   };

  //   const handleDragLeave = (e) => {
  //     e.preventDefault();
  //     console.log("drag leave");
  //   };

  //   const handleDragOver = (e) => {
  //     e.preventDefault();
  //     console.log("drag over");
  //   };

  //   const handleDrop = (e) => {
  //     e.preventDefault();
  //     console.log(e);
  //     console.log("drag drop");
  //   };
  //   const handleClick = (e) => {
  //     let x = document.querySelectorAll(".browse");
  //     e.preventDefault();
  //     // x.click;
  //     console.log(x);
  //     console.log("drag drop");
  //   };

  //   const handleInputChange = () => {};

  return (
    <>
      <div className="container shadow-lg">
        <form onSubmit={onSubmits}>
          <div>
            <br />
            <h1 className="head">Upload Paper</h1>
            <br />
          </div>

          <div className="form-group">
            <label>University</label>

            <input
              className="form-control"
              type="text"
              placeholder="Patna University"
              onChange={inputChange}
              name="subCode"
              value={field.uniName}
              minLength="5"
              required="true"
              readOnly
            />
          </div>

          <div className="form-group">
            <label>Programe</label>

            <select
              className="form-control"
              name="programmeName"
              placeholder="Choose Programme"
              required="true"
              onChange={prgTwoCalls}
              value={field.programmeName}
            >
              <option selected value="">
                Choose Programe
              </option>
              {prg.map((prog) => (
                <option key={prog.id} data-key={prog.id} value={prog.name}>
                  {prog.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Subject</label>

            <select
              className="form-control"
              name="subName"
              placeholder="Choose Subject"
              required="true"
              onChange={subTwoCalls}
              value={field.subName}
            >
              <option value="">Choose Subject</option>
              {sub.map((prog) => (
                <option key={prog.id} data-key={prog.id} value={prog.name}>
                  {prog.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Subject Code</label>

            <input
              className="form-control"
              type="text"
              placeholder="Code"
              onChange={inputChange}
              name="subCode"
              value={field.subCode}
              minLength="1"
              maxLength="8"
              required="true"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Year Of Examination</label>

            <input
              className="form-control"
              type="number"
              placeholder="Enter examination year"
              onChange={inputChange}
              name="examYear"
              value={field.examYear}
              min="2010"
              max={new Date().getFullYear()}
              required="true"
            />
          </div>
          <div className="form-group">
            <label>Total Questions</label>

            <input
              className="form-control"
              type="number"
              placeholder="Enter total no. of questions"
              onChange={inputChange}
              name="totalQuestion"
              value={field.totalQuestion}
              minLength="1"
              maxLength="2"
              required="true"
            />
          </div>
          <div className="form-group">
            <label>Full Marks</label>

            <input
              className="form-control"
              type="number"
              placeholder="Full Marks of paper"
              onChange={inputChange}
              name="fullMarks"
              value={field.fullMarks}
              min="10"
              max="100"
              required="true"
            />
          </div>
          <div className="form-group">
            <label>File Number</label>

            <input
              className="form-control"
              type="number"
              placeholder="Enter file number"
              onChange={inputChange}
              name="fileNo"
              value={field.number}
              min="1"
              max="1000"
              required="true"
            />
          </div>

          <div
            className="dropZone custom-file"
            /*onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onChange={handleInputChange}
            onClick={handleClick}*/
          >
            <input
              className="browse custom-file-input"
              type="file"
              multiple="true"
              required="true"
              name="file"
              onChange={inputChangeFile}
            />
            <label className="custom-file-label">Choose file</label>
          </div>
          <br />
          <br />
          <div className="subdiv">
            <button className="btn btn-secondary " type="submit">
              Submit
            </button>
          </div>
          <br />
        </form>
      </div>
    </>
  );
};

export default UploadForm;
