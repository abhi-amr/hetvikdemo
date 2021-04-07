import React, { useState } from "react";
import "./Login.css";
import "../bootstrap.min.css";
const Login = () => {
  //ani=animation
  const [ani, setani] = useState({
    lt: "0",
    sin: "bt-active",
    sup: "bt-inactive",
    frmin: "frm-active",
    frmup: "frm-inactive",
  });
  const frmSelect = (event) => {
    const name = event.target.name;

    setani(() => {
      if (name === "login-btn") {
        return {
          lt: "0%",
          sin: "bt-active",
          sup: "bt-inactive",
          frmin: "frm-active",
          frmup: "frm-inactive",
        };
      } else if (name === "reg-btn") {
        return {
          lt: "50%",
          sin: "bt-inactive",
          sup: "bt-active",
          frmin: "frm-inactive",
          frmup: "frm-active",
        };
      }
    });
  };

  const [regfield, setrfield] = useState({
    uname: "",
    email: "",
    pass: "",
    cpass: "",
  });

  const reginput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setrfield((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const regSubmit = (event) => {
    event.preventDefault();
    if (regfield.pass != regfield.cpass) {
      alert("Password and confirm Password doesnot matches");
    }
    alert("ok");
  };

  const [sinfield, setsinfield] = useState({
    uname: "",
    password: "",
  });

  const sininput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setsinfield((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const sinSubmit = (event) => {
    event.preventDefault();
    alert("ok sin");
  };

  return (
    <>
      <br />
      <div className="container-fluid main">
        <div className="butbox ">
          <div className="bt-bg" style={{ left: ani.lt }}></div>
          <button
            type="button"
            className={"togbutton " + ani.sin}
            onClick={frmSelect}
            name="login-btn"
            id="login-btn"
          >
            Sign in
          </button>
          <button
            type="button"
            className={"togbutton " + ani.sup}
            onClick={frmSelect}
            name="reg-btn"
            id="reg-btn"
          >
            Sign up
          </button>
        </div>

        <div className={"bg-white " + ani.frmin}>
          <form onSubmit={sinSubmit}>
            <div className="form-group">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Username"
                required="true"
                minLength="3"
                onChange={sininput}
                name="uname"
                value={sinfield.uname}
              />
              {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>
            <div className="form-group">
              {/* <label for="exampleInputPassword1">Password</label> */}
              <input
                type="password"
                className="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder="Password"
                required="true"
                minLength="3"
                onChange={sininput}
                name="password"
                value={sinfield.password}
              />
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </div>
            <span>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </span>
          </form>
        </div>

        <div className={"bg-white " + ani.frmup}>
          <form onSubmit={regSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Username"
                required="true"
                minLength="3"
                onChange={reginput}
                name="uname"
                value={regfield.uname}
              />
              {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                aria-describedby="emailHelp"
                placeholder="Email"
                required="true"
                onChange={reginput}
                name="email"
                value={regfield.email}
              />
              {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>
            <div className="form-group">
              {/* <label for="exampleInputPassword1">Password</label> */}
              <input
                type="password"
                className="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder="Password"
                required="true"
                minLength="3"
                onChange={reginput}
                name="pass"
                value={regfield.pass}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Confirm Password"
                required="true"
                minLength="3"
                onChange={reginput}
                name="cpass"
                value={regfield.cpass}
              />
              {/* <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>
            <span>
              <button type="submit" className="btn btn-secondary">
                Register
              </button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
