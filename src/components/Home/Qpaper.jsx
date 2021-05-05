import React from "react";
import "./Qpaper.css";
import "../bootstrap.min.css";
import bscData, {
  baData,
  bcomData,
  bcaData,
  biotechData,
  mscData,
  maData,
  mcomData,
  mcaData,
} from "./PaperData";
import PaperTable from "./PaperTable";

const Qpaper = () => {
  const mystyle = {
    padding: "10px",
  };
  return (
    <React.Fragment>
      <br />
      <div
        style={mystyle}
        className="shadow-lg bg-dark qpmain container-fluid font-weight-bold"
      >
        {/* Undergraduate or Postgraduate */}
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
          {/* The div below is for Undergraduate courses */}
          <div
            className="tab-pane fade show active"
            id="ug"
            role="tabpanel"
            aria-labelledby="ug-tab"
          >
            {/* The list of Undergraduate courses starts */}
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
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="biotech-tab"
                  data-toggle="tab"
                  href="#biotech"
                  role="tab"
                  aria-controls="biotech"
                  aria-selected="false"
                >
                  B.Sc (Biotechnology)
                </a>
              </li>
              {/* The list of Undergraduate courses ends */}
            </ul>
            <div className="tab-content" id="ugcoursTabContent">
              {/*This div is for question paper data of ug courses listed above.*/}
              <div
                className="tab-pane fade show active"
                id="bsc"
                role="tabpanel"
                aria-labelledby="bsc-tab"
              >
                <PaperTable course={bscData} />
              </div>
              <div
                className="tab-pane fade"
                id="ba"
                role="tabpanel"
                aria-labelledby="ba-tab"
              >
                <PaperTable course={baData} />
              </div>
              <div
                className="tab-pane fade"
                id="bcom"
                role="tabpanel"
                aria-labelledby="bcom-tab"
              >
                <PaperTable course={bcomData} />
              </div>

              <div
                className="tab-pane fade"
                id="bca"
                role="tabpanel"
                aria-labelledby="bca-tab"
              >
                <PaperTable course={bcaData} />
              </div>
              <div
                className="tab-pane fade"
                id="biotech"
                role="tabpanel"
                aria-labelledby="biotech-tab"
              >
                <PaperTable course={biotechData} />
              </div>
            </div>
            {/* Undergraduate div ends. */}
          </div>
          {/* The div below is for Postgraduate courses */}
          <div
            className="tab-pane fade"
            id="pg"
            role="tabpanel"
            aria-labelledby="pg-tab"
          >
            {/* The list of Postgraduate courses starts */}
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
              {/* The list of Posgraduate courses ends */}
            </ul>
            <div className="tab-content" id="ugcoursTabContent">
              {/*This div is for question paper data of pg courses listed above.*/}
              <div
                className="tab-pane fade show active"
                id="msc"
                role="tabpanel"
                aria-labelledby="msc-tab"
              >
                <PaperTable course={mscData} />
              </div>
              <div
                className="tab-pane fade"
                id="ma"
                role="tabpanel"
                aria-labelledby="ma-tab"
              >
                <PaperTable course={maData} />
              </div>
              <div
                className="tab-pane fade"
                id="mcom"
                role="tabpanel"
                aria-labelledby="mcom-tab"
              >
                <PaperTable course={mcomData} />
              </div>

              <div
                className="tab-pane fade"
                id="mca"
                role="tabpanel"
                aria-labelledby="mca-tab"
              >
                <PaperTable course={mcaData} />
              </div>
            </div>
            {/* Postgraduate div ends. */}
          </div>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};

export default Qpaper;
