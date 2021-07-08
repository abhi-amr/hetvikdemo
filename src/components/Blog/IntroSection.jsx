import React from 'react';

import './IntroSection.css';
import AboutBlog from "../../components/Blog/AboutBlog";


function IntroSection() {
    return (
        <>
            <div className="blog-intro-section">
                <div className="blog-intro-img"></div>

                <div className="overlap-div">

                    <AboutBlog />

                </div>
            </div>

        </>
    )
}

export default IntroSection
