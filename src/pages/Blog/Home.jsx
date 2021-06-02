import React from 'react';
import TopBlogs from '../../components/Blog/TopBlogs';
import Heading from "../../components/Utilities/Heading";

function Home() {
    return (
        <>
            <TopBlogs/>
            <Heading content="Category1"/>
            <Heading content="Category2"/>
        </>
    )
}

export default Home
