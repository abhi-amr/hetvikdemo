import React from "react";

const PaperTable = (props) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered">
          <tbody>
            {props.course.map((val) => {
              return (
                <tr>
                  <th scope="row">{val.pname}</th>
                  <td>
                    <a href={val.one}>1st</a>
                  </td>
                  <td>
                    <a href={val.two}>2nd</a>
                  </td>
                  <td>
                    <a href={val.three}>3rd</a>
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
