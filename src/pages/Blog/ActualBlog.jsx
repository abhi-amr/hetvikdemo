import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogTitle from "../../components/Blog/BlogTitle";
import SubHeading from "../../components/Blog/SubHeading";
import Paragraph from "../../components/Blog/Paragraph";
import BlogAuthor from "../../components/Blog/BlogAuthor";
import Tag from "../../components/Blog/Tag";
import TopBlogs from "../../components/Blog/TopBlogs";
import { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import endpoint from "../../components/axios";
import { Helmet } from "react-helmet";
import baseUrl from "../../components/CommanUrl";
import YouMayAlsoRead from "../../components/Blog/YouMayAlsoRead";
import Heading from "../../components/Utilities/Heading";

export default function ActualBlog({ match }) {
  const [blogData, setBlogData] = useState({
    approved: "",
    author: {},
    category: "",
    date: "",
    id: "",
    imageUrl: "",
    month: "",
    paragraph: [""],
    tags: [""],
    timeStamp: "",
    title: "",
  });
  const history = useHistory();

  const recentCardGet = () => {
    let url = baseUrl + "Blog/" + match.params.id;
    fetch(url)
      .then((response) => {
        if (response.status === 204) {
          return null;
        } else {
          return response.json();
        }
      })
      .then((json) => {
        if (json == null) {
          history.push("/blog");
          // window.location.href = "/blog";
          // return <Redirect to="/blog" />;
        } else setBlogData(json);
      });
  };
  useEffect(() => {
    recentCardGet();
  }, [match.params.id]);
  return (
    <>
      <Helmet>
        <title>{blogData.title} | Hetvik</title>
        <meta name="description" content={blogData.paragraph[0]} />
        <link
          rel="canonical"
          href={"https://hetvik.in/blog/" + match.params.id}
        />
      </Helmet>
      <Container>
        <Row>
          <Col>
            <br />
            {/* <Tile /> */}
            <BlogTitle title={blogData.title} />
            <SubHeading content={blogData.subHeading} />
            <br />
            <img
              src={blogData.imageUrl}
              alt={blogData.title}
              width="100%"
              style={{
                maxHeight: "310px",
                overflow: "hidden",
                borderRadius: "6px",
              }}
            />
            <br />
            <BlogAuthor author={blogData.author} date={blogData.date} />
            <br />
            {blogData.paragraph.map((data) => {
              return <Paragraph content={data} />;
            })}
            <span>
              Tagged with
              {blogData.tags.map((data) => {
                return <Tag tag={data} />;
              })}
            </span>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Heading content="You may also like" />
      <YouMayAlsoRead />
      <br />
      <br />
    </>
  );
}
