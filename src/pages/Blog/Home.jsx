import React from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
//import CategoryList from '../../components/Blog/CategoryList';
import TopBlogs from '../../components/Blog/TopBlogs';
import IntroSection from '../../components/Blog/IntroSection';
import Heading from "../../components/Utilities/Heading";
// import ActualBlog from './ActualBlog';

function Home() {
    return (
        <>
            <IntroSection />
            {/* <ActualBlog title="As the dates of <strong>Patna University</strong> exams are announced" /> */}
            <TopBlogs />
            <Heading content="Category1"/>
            <Heading content="Category2"/>
        </>
    )
}

export default Home
