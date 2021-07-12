import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { Text } from 'react-font';
import { Col } from 'react-bootstrap';

import './AboutBlog.css';


function CategorySlider(props) {
    const [category, setCategory] = useState(["Achievements",
        //"Announcements",
        // "Careers",
        "City",
        "Education",
        // "Entertainment",
        //"Food and Lifestyle",
        // "Fiction",
        //"How to",
        // "News And Notices",
        "Random Noise",
        //"Sports",
        //"University"
    ]);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            // slidesToSlide: 4,
            // partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            // slidesToSlide: 2,
            // partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            // slidesToSlide: 1,
            // partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
        },
    };



    return (
        <>
            {/* <Carousel partialVisible={true} responsive={responsive}>

                {category.map((name, index) => {
                    return <div><Link key={index++} to={"/blog/category/" + name}>{name}</Link>&nbsp;| &nbsp;</div>;
                })}
            </Carousel> */}

            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>

        </>
    )
}

export default CategorySlider
