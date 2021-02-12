import React from "react";
import "./Qpaper.css";
import "../bootstrap.min.css";
import BscData, { BcaData } from "./PaperData";
import PaperTable from "./PaperTable";

const Qpaper = () => {
  return (
    <React.Fragment>
      <br />
      <div className="container  shadow-lg qpmain">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="ug-tab"
              data-toggle="tab"
              href="#ug"
              role="tab"
              aria-controls="ug"
              aria-selected="true"
            >
              Undergraduate
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pg-tab"
              data-toggle="tab"
              href="#pg"
              role="tab"
              aria-controls="pg"
              aria-selected="false"
            >
              Postgraduate
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="ug"
            role="tabpanel"
            aria-labelledby="ug-tab"
          >
            <ul className="nav nav-tabs" id="coursTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="bsc-tab"
                  data-toggle="tab"
                  href="#bsc"
                  role="tab"
                  aria-controls="bsc"
                  aria-selected="true"
                >
                  B.Sc
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ba-tab"
                  data-toggle="tab"
                  href="#ba"
                  role="tab"
                  aria-controls="ba"
                  aria-selected="false"
                >
                  B.A
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="bcom-tab"
                  data-toggle="tab"
                  href="#bcom"
                  role="tab"
                  aria-controls="bcom"
                  aria-selected="false"
                >
                  B.Com
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="bca-tab"
                  data-toggle="tab"
                  href="#bca"
                  role="tab"
                  aria-controls="bca"
                  aria-selected="false"
                >
                  BCA
                </a>
              </li>
            </ul>
            <div className="tab-content" id="ugcoursTabContent">
              <div
                className="tab-pane fade show active"
                id="bsc"
                role="tabpanel"
                aria-labelledby="bsc-tab"
              >
                <PaperTable course={BscData} />
              </div>
              <div
                className="tab-pane fade"
                id="ba"
                role="tabpanel"
                aria-labelledby="ba-tab"
              >
                paper Ba
              </div>
              <div
                className="tab-pane fade"
                id="bcom"
                role="tabpanel"
                aria-labelledby="bcom-tab"
              >
                paper Bcom
              </div>

              <div
                className="tab-pane fade"
                id="bca"
                role="tabpanel"
                aria-labelledby="bca-tab"
              >
                <PaperTable course={BcaData} />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pg"
            role="tabpanel"
            aria-labelledby="pg-tab"
          >
            <ul className="nav nav-tabs" id="coursTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="msc-tab"
                  data-toggle="tab"
                  href="#msc"
                  role="tab"
                  aria-controls="msc"
                  aria-selected="true"
                >
                  M.Sc
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ma-tab"
                  data-toggle="tab"
                  href="#ma"
                  role="tab"
                  aria-controls="ma"
                  aria-selected="false"
                >
                  M.A
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="mcom-tab"
                  data-toggle="tab"
                  href="#mcom"
                  role="tab"
                  aria-controls="mcom"
                  aria-selected="false"
                >
                  M.Com
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="mca-tab"
                  data-toggle="tab"
                  href="#mca"
                  role="tab"
                  aria-controls="mca"
                  aria-selected="false"
                >
                  MCA
                </a>
              </li>
            </ul>
            <div className="tab-content" id="ugcoursTabContent">
              <div
                className="tab-pane fade show active"
                id="msc"
                role="tabpanel"
                aria-labelledby="msc-tab"
              >
                <PaperTable course={BscData} />
              </div>
              <div
                className="tab-pane fade"
                id="ma"
                role="tabpanel"
                aria-labelledby="ma-tab"
              >
                paper Ba
              </div>
              <div
                className="tab-pane fade"
                id="mcom"
                role="tabpanel"
                aria-labelledby="mcom-tab"
              >
                paper Bcom
              </div>

              <div
                className="tab-pane fade"
                id="mca"
                role="tabpanel"
                aria-labelledby="mca-tab"
              >
                <PaperTable course={BcaData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};

export default Qpaper;
