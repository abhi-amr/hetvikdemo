import React from 'react';
import Heading from '../../components/Utilities/Heading';
import { useState, useEffect } from 'react';
import endpoint from "../../components/axios";
import StretchedTile from '../../components/Blog/StretchedTile';

function SeeMore({ match }) {
    const [blogs, setBlogs] = useState([]);
    const getBlogs = async () => {
        let response = await endpoint.get("Blog/" + match.params.id);
        setBlogs(response.data);
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <>
            <Heading content={match.params.id} />
            {blogs.map((blog) => {
                return <StretchedTile blog={blog} />
            })}
        </>
    )
}

export default SeeMore