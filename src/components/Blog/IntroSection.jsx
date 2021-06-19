import React, { useEffect, useState } from 'react';
import './IntroSection.css';
import BlogTitle from './BlogTitle';
import CategoryTitle from './CategoryTitle';
import endpoint from '../axios';

function IntroSection() {
    const [blog, setBlog] = useState({});
    const getBlog = async () => {
        let response  = await endpoint.get("Blog/How-to-make-most-use-of-our-website---Hetvik-June");  //change api call name
        const info = response.data;
        setBlog(info);
    };

    useEffect(() => {
        getBlog();
      }, []);
      
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
                    <CategoryTitle content={blog.category} />
                    <BlogTitle title={blog.title}/>
                </div>
            </div>
            
        </>
    )
}

export default IntroSection
