import React from "react";
// import imageSrc from "./sop.jpg";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const myStyleCard = {
    margin: "0px",
    // width: "15rem",
  };

  let [day, month, year] = props.blogData.date.split("-");
  let dateString = new Date(year, month - 1, day).toLocaleString("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  return (
    <>
      <div className="d-inline blogCard">
        <Link
          style={myStyleCard}
          to={`/blog/${props.blogData.id}`}
          className="btn btn-light card m-4"
        >
          <div class="card">
            <img
              src={props.blogData.imageUrl}
              className="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{props.blogData.title}</h5>
              <p class="card-text">
                <strong>~by </strong>
                <em>
                  {props.blogData.author.firstName}{" "}
                  {props.blogData.author.lastName}
                </em>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  {/* Last updated 3 mins ago */}
                  Last Updated at {dateString}
                </small>
              </p>
            </div>
          </div>
          {/* <img src={imageSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <footer className="blockquote-footer">
              Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div> */}
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
