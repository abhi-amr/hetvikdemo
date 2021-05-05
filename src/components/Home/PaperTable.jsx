import React from "react";
import { Link } from "react-router-dom";
import "../bootstrap.min.css";

const PaperTable = (props) => {
  return (
    <>
      <div className="table-responsive">
        <table
          style={{ marginBottom: "0px" }}
          className="table table-bordered table-striped table-dark "
        >
          <tbody>
            {props.course.map((val) => {
              return (
                <tr>
                  <th scope="row">{val.subName}</th>
                  <td>
                    <Link
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
                      2012
                    </Link>
                  </td>
                  <td>
                    <Link
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
                      2013
                    </Link>
                  </td>
                  <td>
                    <Link
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
                      2014
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
