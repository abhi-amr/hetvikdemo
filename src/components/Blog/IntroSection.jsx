import React, { useEffect, useState } from 'react';
import './IntroSection.css';
import BlogTitle from './BlogTitle';
import CategoryTitle from './CategoryTitle';
import { Link } from "react-router-dom";
import endpoint from '../axios';
import {Container, Row, Col} from 'react-bootstrap';
import {Text} from 'react-font';

function IntroSection() {
    const [blog, setBlog] = useState({
        author : {}
    });
    const getBlog = async () => {
        let response  = await endpoint.get("Blog/How-to-make-most-use-of-our-website---Hetvik-June");  //change api call name
        const info = response.data;
        setBlog(info);
    };

    useEffect(() => {
        getBlog();
      }, []);

    const introStyle = {
        color : "#212529",
        textDecoration : "none"
    }
      
    return (
        <>
            <div className="blog-intro-section">
                <div className="blog-intro-img"></div>
                {/* <img 
                className = "blog-intro-img"
                src={coffeeImg}
                width="100%"
                /> */}
                <div className="overlap-div">
                    <Link style={introStyle} to={`/blog/${blog.id}`}>
                        <BlogTitle title={blog.title}/>
                    </Link>
                    <Container fluid>
                        <Row>
                            <Col sm className="d-flex justify-content-start">
                                {/* <CategoryTitle content={blog.category} /> */}
                                <Link  to={`/blog/${blog.id}`}>
                                    <Text family="Ubuntu" weight="medium">Read full article &gt;&gt;&gt;</Text>
                                </Link>
                            </Col>
                            <Col sm className="d-flex justify-content-end blockquote-footer"><em>Last Updated by&nbsp;</em>{blog.author.firstName + " " + blog.author.lastName}</Col>
                        </Row>
                    </Container>
                </div>
            </div>
            
        </>
    )
}

export default IntroSection
