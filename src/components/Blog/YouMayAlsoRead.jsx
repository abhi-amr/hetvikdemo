import React from "react";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

import endpoint from "../axios";
import StretchedTile from "./StretchedTile";


function YouMayAlsoRead() {
  const [blogs, setBlogs] = useState([]);
  // const history = useHistory();
  const getBlogs = async () => {
    let response = await endpoint.get("Blog/YouMayAlsoLike");
    // if (response.data.length === 0) {
    //   history.push("/blog");
    // }
    setBlogs(response.data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      {blogs.map((blog) => {
        return <StretchedTile blog={blog} />;
      })}
    </>
  );
}

export default YouMayAlsoRead;
