import React from "react";
import { Link } from "react-router-dom";
import { Text } from "react-font";
import { Card } from "react-bootstrap";
import './BlogCard.css';

const BlogCard = (props) => {
  const mySliderCard = {
      paddingLeft : "10px",
      paddingRight : "10px",
      textDecoration : "none",
  };


  let [day, month, year] = props.blogData.date.split("-");
  let dateString = new Date(year, month - 1, day).toLocaleString("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  return (
    <>
      <div style={mySliderCard}>
        <Link
          // target="_blank"
          style= {{textDecoration:"none", color:"#212529"}}
          to={`/blog/${props.blogData.id}`}          
        >
          <Card id="blogCard">
            <Card.Img variant="top" src={props.blogData.imageUrl} alt={props.blogData.title} style={{maxHeight:'14rem'}}/>
              <Card.Body>
              <Card.Title className="d-block text-truncate" style={{maxWidth: "400px"}}>{props.blogData.title}</Card.Title>
              <Card.Text>
                <strong>~</strong>
                <em>
                  {props.blogData.author.firstName}{" "}
                  {props.blogData.author.lastName}
                </em>
              </Card.Text>
              <Card.Text>
                <small class="text-muted">                  
                  Last Updated on {dateString}
                </small>
              </Card.Text>
              </Card.Body>
          </Card>

          {/* <div class="card" >
            <img
              src={props.blogData.imageUrl}
              className="card-img-top"
              alt={props.blogData.title}
            />
            <div class="card-body">
              <div class="card-title">{props.blogData.title}</div>
              <p class="card-text">
                <strong>~</strong>
                <em>
                  {props.blogData.author.firstName}{" "}
                  {props.blogData.author.lastName}
                </em>
              </p>
              <p class="card-text">
                <small class="text-muted">                  
                  Last Updated on {dateString}
                </small>
              </p>
            </div>
          </div> */}

        </Link>
      </div>
    </>
  );
};

export default BlogCard;
