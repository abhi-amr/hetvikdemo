import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";


import BlogTitle from "../../components/Blog/BlogTitle";
import SubHeading from "../../components/Blog/SubHeading";
import Paragraph from "../../components/Blog/Paragraph";
import BlogAuthor from "../../components/Blog/BlogAuthor";
import Tag from "../../components/Blog/Tag";
// import TopBlogs from "../../components/Blog/TopBlogs";
import baseUrl from "../../components/CommanUrl";
import YouMayAlsoRead from "../../components/Blog/YouMayAlsoRead";
import Heading from "../../components/Utilities/Heading";
// import endpoint from "../../components/axios";



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

  const [loading, setLoading] = useState(true);


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
        } else {
          setBlogData(json);
          setLoading(false);
        }
      });
  };
  useEffect(() => {
    recentCardGet();
    window.scrollTo(0, 0);  //scroll to top
  }, [match.params.id]);


  const blogImgBackgroundStyle = {
    backgroundImage: `url("${blogData.imageUrl}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    maxHeight: "310px",
    minHeight: "300px",
    borderRadius: "6px",
  }


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
      {/* spinner-grow and spinner-border */}
      {loading && <div className="d-flex justify-content-center"><br /><br /><span className="spinner-grow" role="status" style={{ width: "7rem", height: "7rem" }}></span></div>}
      <Container>
        <Row>
          <Col>
            <br />
            {/* <Tile /> */}
            <BlogTitle title={blogData.title} />
            <SubHeading content={blogData.subHeading} />
            <br />
            <div style={blogImgBackgroundStyle}></div>
            {/* <img
              src={blogData.imageUrl}
              alt={blogData.title}
              width="100%"
              style={{
                maxHeight: "310px",
                overflow: "hidden",
                borderRadius: "6px",
              }}
            /> */}
            <br />
            {!loading && <BlogAuthor author={blogData.author} date={blogData.date} />}

            <br />
            {blogData.paragraph.map((data) => {
              return <Paragraph content={data} />;
            })}
            {!loading && <span>
              Tagged with
              {blogData.tags.map((data) => {
                return <Tag tag={data} />;
              })}
            </span>}
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
