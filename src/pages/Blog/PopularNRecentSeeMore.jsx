import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";


import Heading from "../../components/Utilities/Heading";
import endpoint from "../../components/axios";
import StretchedTile from "../../components/Blog/StretchedTile";



function PopularNRecentSeeMore(props) {
    const [blogs, setBlogs] = useState([]);
    const history = useHistory();
    const getBlogs = async () => {
        let response = await endpoint.get("Blog/" + props.name);
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
                <title>{props.name.toUpperCase()} | Hetvik</title>
                <meta name="description" content="Get Updates about Patna University, Patna Univerity Admissions, Latest Technology, Sports, News, Articles and much more" />
                <link rel="canonical" href={"https://hetvik.in/blogs/" + props.name.toLowerCase()} />
            </Helmet>

            <Heading content={props.name.toUpperCase()} />
            {blogs.map((blog) => {
                return <StretchedTile blog={blog} />;
            })}
        </>
    );
}

export default PopularNRecentSeeMore;
