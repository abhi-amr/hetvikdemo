import React, { useState } from "react";
import "./UploadForm.css";
import "../bootstrap.min.css";

const UploadForm = () => {
  const [field, setfield] = useState({
    uname: "",
    pname: "",
    subname: "",
    scode: "",
    yoexam: "",
    tquestion: "",
    fmarks: "",
    fnumber: "",
  });
  const inputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setfield((prevalue) => {
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
  const onSubmits = (event) => {
    event.preventDefault();
    alert("ok");
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

            <select
              className="form-control"
              name="uname"
              placeholder="Choose University"
              required="true"
            >
              <option selected value="">
                Choose University
              </option>
              <option value="pu">Patna University</option>
              <option value="mu">Magadh University</option>
            </select>
          </div>

          <div className="form-group">
            <label>Programe</label>

            <select
              className="form-control"
              name="pname"
              placeholder="Choose Programe"
              required="true"
            >
              <option selected value="">
                Choose Programe
              </option>
              <option value="pu">B.Sc Maths</option>
              <option value="mu">B.sc Physics</option>
            </select>
          </div>
          <div className="form-group">
            <label>Subject</label>

            <select
              className="form-control"
              name="subname"
              placeholder="Choose Subject"
              required="true"
            >
              <option value="">Choose Subject</option>
              <option value="maths">Maths</option>
              <option value="physics">Physics</option>
            </select>
          </div>

          <div className="form-group">
            <label>Subject Code</label>

            <input
              className="form-control"
              type="text"
              placeholder="Code"
              onChange={inputChange}
              name="scode"
              value={field.scode}
              minLength="3"
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
              name="yoexam"
              value={field.yoexam}
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
              name="tquestion"
              value={field.tquestion}
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
              name="fmarks"
              value={field.fmarks}
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
              name="fnumber"
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
            />
            <label className="custom-file-label">Choose file</label>
          </div>

          {/* <input

          type="text"
          placeholder="Enter your name"
          onChange={inputChange}
          name="fname"
        />
        <input
          type="text"
          placeholder="Enter your name"
          onChange={inputChange}
          name="lname"
        /> */}
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
