import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../bootstrap.min.css";

const PaperTable = (props) => {
  const mystyle = {
    marginBottom: "0px",
    textDecoration: "none",
  };
  const mystyleLink = {
    textDecoration: "none",
    color: "black",
  };
  const mystyleTd = {
    padding: "0.5rem 0.75rem 0.5rem 0.75rem",
  };
  return (
    <>
      <div className="table-responsive">
        <table
          style={mystyle}
          className="table table-bordered table-striped table-secondary "
        >
          <tbody>
            {props.course.map((val) => {
              return (
                <tr>
                  <th scope="row">{val.subName}</th>
                  <td style={mystyleTd}>
                    <NavLink
                      style={mystyleLink}
                      className=" nav nav-pills nav-fill nav-link "
                      to={{
                        pathname: "/questions",
                        state: {
                          programmeName: val.programmeName,
                          programmeId: val.programmeId,
                          subName: val.subName,
                          subCode: val.subCode,
                          year: val.one,
                        },
                      }}
                    >
                      <em>{val.one}</em>
                    </NavLink>
                  </td>
                  <td style={mystyleTd}>
                    <Link
                      style={mystyleLink}
                      className=" nav nav-pills nav-fill nav-link "
                      to={{
                        pathname: "/questions",
                        state: {
                          programmeName: val.programmeName,
                          programmeId: val.programmeId,
                          subName: val.subName,
                          subCode: val.subCode,
                          year: val.two,
                        },
                      }}
                    >
                      <em>{val.two}</em>
                    </Link>
                  </td>
                  <td style={mystyleTd}>
                    <Link
                      style={mystyleLink}
                      className=" nav nav-pills nav-fill nav-link "
                      to={{
                        pathname: "/questions",
                        state: {
                          programmeName: val.programmeName,
                          programmeId: val.programmeId,
                          subName: val.subName,
                          subCode: val.subCode,
                          year: val.three,
                        },
                      }}
                    >
                      <em>{val.three}</em>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default PaperTable;
