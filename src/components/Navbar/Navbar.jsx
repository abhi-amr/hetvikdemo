import React from "react";
import "../bootstrap.min.css";
import "./Navbar.css";
//import "../bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="https://www.google.com/">
            hetvik
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-center ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  questions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link sign" href="#">
                  sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
