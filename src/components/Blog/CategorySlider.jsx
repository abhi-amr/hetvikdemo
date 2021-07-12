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



    return (
        <>
            <div id="container">
                <div id="modules">
                    <Text family="Ubuntu" className="module">
                        | &nbsp;
                        {category.map((name, index) => {
                            return <span><Link key={index++} to={"/blog/category/" + name}>{name}</Link>&nbsp;| &nbsp;</span>;
                        })}
                    </Text>
                </div>
            </div>
            {/* <div class="code-holder" style={{ width: "100%", overflowX: "scroll", height: "auto", textAlign: "center" }}>
                <code style={{ whiteSpace: "nowrap" }}>
                    ar text = 'This is a bit of longer text that ends up wrapping around and
                    messing up the rest of the formatting.';
                </code>
            </div> */}

        </>
    )
}

export default CategorySlider
