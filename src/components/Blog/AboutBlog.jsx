import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Text } from 'react-font';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import AboutBlogImgBackground from '../../images/Blog/blogIntro.png';
import endpoint from '../axios';
import './AboutBlog.css';


const aboutBlogImgBackgroundStyle = {
    backgroundImage: `url("${AboutBlogImgBackground}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    borderRadius: "6px",
}
//Blog/GetCategoryList


function AboutBlog() {
    const [category, setCategory] = useState(["Achievements",
        "Announcements",
        // "Careers",
        "City News",
        "Education",
        // "Entertainment",
        "Food and Lifestyle",
        // "Fiction",
        "How to",
        // "News And Notices",
        "Random Noise",
        "Sports",
        "University"]);

    const getCategoryList = async () => {
        let response = await endpoint.get("Blog/GetCategoryList");
        const info = response.data;
        setCategory(info);
    }

    useEffect(() => {
        getCategoryList();
    }, []);

    return (
        <>
            <Container fluid style={aboutBlogImgBackgroundStyle}>
                <br />
                <Row>
                    <Col>
                        <h1 style={{}} className="d-flex justify-content-center">
                            <Text family="Ubuntu" >
                                Welcome Readers to Hetvik Blogs
                            </Text>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <span style={{}}>
                            <Text family="Staatliches"  >
                                Get Patna University Updates, City News, Sports and much more
                            </Text>
                        </span>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col className="d-flex justify-content-center">
                        <span style={{}}>
                            <Text family="Ubuntu">
                                Read by Category :
                            </Text>
                        </span>
                    </Col>
                </Row>
                <Row >
                    <MdKeyboardArrowLeft />
                    <Col style={{ overflowX: "auto", whiteSpace: "nowrap", textAlign: "center" }} className="category-container">
                        {/* <p className="d-flex justify-content-center"> */}
                        <Text family="Ubuntu" className="">
                            | &nbsp;
                            {category.map((name, index) => {
                                return <span><Link key={index++} to={"/blog/category/" + name}>{name}</Link>&nbsp;| &nbsp;</span>;
                            })}
                        </Text>
                        {/* </p> */}

                    </Col>
                    <MdKeyboardArrowRight />
                </Row>
                <br />
            </Container>
        </>
    )
}

export default AboutBlog
