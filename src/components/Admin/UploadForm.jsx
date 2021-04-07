import React, { useEffect, useState } from "react";
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
  const [key, setKey] = useState({
    ukey: "",
    prgkey: "",
    subkey: "",
  });

  /*Api call for University*/
  const [uni, setUni] = useState([]);
  const uniGet = () => {
    let url = "https://hetvikbackapi.azurewebsites.net/api/test/university";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setUni(json);
      });
  };
  useEffect(() => {
    uniGet();
  }, []);

  /*Api call for program*/
  const [prg, setPrg] = useState([]);
  const prgGet = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    let keyvalue = event.target.options[selectedIndex].getAttribute("data-key");

    setKey((prevalue) => {
      return {
        ...prevalue,
        ukey: keyvalue,
      };
    });
    const url = "https://hetvikbackapi.azurewebsites.net/api/test/" + keyvalue;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPrg(json);
      });
  };

  /*Api call for subject*/
  const [sub, setSub] = useState([]);
  const subGet = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    let keyvalue = event.target.options[selectedIndex].getAttribute("data-key");
    setKey((prevalue) => {
      return {
        ...prevalue,
        prgkey: keyvalue,
      };
    });
    const url =
      "https://hetvikbackapi.azurewebsites.net/api/test/" +
      key.ukey +
      "/" +
      keyvalue;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setSub(json);
      });
  };

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

  /*state for file*/
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const inputChangeFile = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("ok");

    /*api call for uploading form data*/
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("program", "bsc");
    formData.append("subject", "phy");
    formData.append("year", "2018");
    formData.append("fileNo", "123");
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
        console.log(json);
      });
  };
  const uniTwoCalls = (event) => {
    inputChange(event);
    prgGet(event);
  };
  const prgTwoCalls = (event) => {
    inputChange(event);
    subGet(event);
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
            <h1 className="head">Upload xPaper</h1>
            <br />
          </div>

          <div className="form-group">
            <label>University</label>

            <select
              className="form-control"
              name="uname"
              placeholder="Choose University"
              onChange={uniTwoCalls}
              required="true"
              value={field.uname}
              // onSelect={nextList}
            >
              <option selected value="">
                Choose University
              </option>
              {uni.map((prog) => (
                <option key={prog.Key} data-key={prog.Key} value={prog.Value}>
                  {prog.Value}
                </option>
              ))}
              {/* <option value="pu">Patna University</option>
              <option value="mu">Magadh University</option> */}
            </select>
          </div>

          <div className="form-group">
            <label>Programe</label>

            <select
              className="form-control"
              name="pname"
              placeholder="Choose Programe"
              required="true"
              onChange={prgTwoCalls}
              value={field.pname}
            >
              <option selected value="">
                Choose Programe
              </option>
              {prg.map((prog) => (
                <option key={prog.Key} data-key={prog.Key} value={prog.Value}>
                  {prog.Value}
                </option>
              ))}
              {/* <option value="pu">B.Sc Maths</option>
              <option value="mu">B.sc Physics</option> */}
            </select>
          </div>
          <div className="form-group">
            <label>Subject</label>

            <select
              className="form-control"
              name="subname"
              placeholder="Choose Subject"
              required="true"
              onChange={inputChange}
              value={field.subname}
            >
              <option value="">Choose Subject</option>
              {sub.map((prog) => (
                <option key={prog.Key} data-key={prog.Key} value={prog.Value}>
                  {prog.Value}
                </option>
              ))}
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
              name="file"
              onChange={inputChangeFile}
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
