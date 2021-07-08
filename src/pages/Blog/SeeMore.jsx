import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";


import Heading from "../../components/Utilities/Heading";
import endpoint from "../../components/axios";
import StretchedTile from "../../components/Blog/StretchedTile";



function SeeMore({ match }) {
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();
  const getBlogs = async () => {
    let category = match.params.id;
    let response = await endpoint.get("Blog/GetBlogsByCategory/" + category.toLowerCase());
    if (response.data.length === 0) {
      history.push("/blog");
    }
    setBlogs(response.data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>{match.params.id.toUpperCase()} | Hetvik</title>
        <meta name="description" content="Get Updates about Patna University, Patna Univerity Admissions, Latest Technology, Sports, News, Articles and much more" />
        <link rel="canonical" href={"https://hetvik.in/blogs/category/" + match.params.id.toLowerCase()} />
      </Helmet>

      <Heading content={match.params.id.toUpperCase()} />
      {blogs.map((blog) => {
        return <StretchedTile blog={blog} />;
      })}
    </>
  );
}

export default SeeMore;
