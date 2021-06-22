import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


import Heading from "../../components/Utilities/Heading";
import endpoint from "../../components/axios";
import StretchedTile from "../../components/Blog/StretchedTile";



function SeeMore({ match }) {
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();
  const getBlogs = async () => {
    let response = await endpoint.get("Blog/" + match.params.id);
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
      <Heading content={match.params.id.toUpperCase()} />
      {blogs.map((blog) => {
        return <StretchedTile blog={blog} />;
      })}
    </>
  );
}

export default SeeMore;
