import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Text } from 'react-font';
import { Link } from 'react-router-dom';

import AboutBlogImgBackground from '../../images/Blog/blogIntro.png'


const aboutBlogImgBackgroundStyle = {
    backgroundImage: `url("${AboutBlogImgBackground}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    borderRadius: "6px",
}

function AboutBlog() {
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
                    <Col>
                        <span style={{}}>
                            <Text family="Staatliches" className="d-flex justify-content-center" >
                                Patna University Updates | City News | Entrepreneurship | Much More
                            </Text>
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span style={{}}>
                            <Text family="Ubuntu" className="d-flex justify-content-center">
                                We are on a mission to provide you with a platform that will assist you in your curricular years.
                            </Text>
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <span style={{}}> */}
                        <Text family="Ubuntu" className="d-flex justify-content-center">
                            <em>Read about&nbsp;&nbsp;</em>
                            {/* to={`/blog/${props.blogData.id}`} */}
                            <Link to="/blog">Patna University</Link>
                            &nbsp;| &nbsp;
                            <Link to="/blog">How to use our Website</Link>
                            &nbsp;| &nbsp;
                            <Link to="/blog">Patna</Link>
                        </Text>
                        {/* </span> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutBlog
