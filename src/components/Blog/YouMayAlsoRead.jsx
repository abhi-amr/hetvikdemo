import React from 'react';
import { useState, useEffect } from 'react';
import endpoint from "../axios";
import StretchedTile from './StretchedTile';

function YouMayAlsoRead() {
    const [blogs, setBlogs] = useState([]);
    const getBlogs = async () => {
        let response = await endpoint.get("Blog/Popular"); //change api call to YouMayAlsoRead
        setBlogs(response.data);
    }

    useEffect(() => {
        getBlogs();
      }, []);
    return (
        <>
            {blogs.map((blog) =>{
                return <StretchedTile blog={blog}/>
            })}
        </>
    )
}

export default YouMayAlsoRead
