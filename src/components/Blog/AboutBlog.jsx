import React, { useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Text } from 'react-font';
import { Link } from 'react-router-dom';

import AboutBlogImgBackground from '../../images/Blog/blogIntro.png';
import './AboutBlog.css';


const aboutBlogImgBackgroundStyle = {
    backgroundImage: `url("${AboutBlogImgBackground}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    borderRadius: "6px",
}



function AboutBlog() {
    const [category, setCategory] = useState(["Achievements",
        "Announcements",
        // "Careers",
        "City",
        "Education",
        // "Entertainment",
        "Food and Lifestyle",
        // "Fiction",
        "How to",
        // "News And Notices",
        "Random Noise",
        "Sports",
        "University"]);

    return (
        <>
            <Container fluid style={aboutBlogImgBackgroundStyle}>
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
                    <Col style={{ overflowX: "auto", whiteSpace: "nowrap" }} className=" category-container">
                        {/* <span style={{}}> */}
                        <Text family="Ubuntu" className="d-flex justify-content-center">

                            {/* to={`/blog/${props.blogData.id}`} */}

                            | &nbsp;
                            {category.map((name, index) => {
                                return <span><Link key={index++} to="/blog">{name}</Link>&nbsp;| &nbsp;</span>;
                            })}
                        </Text>
                        {/* </span> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutBlog
