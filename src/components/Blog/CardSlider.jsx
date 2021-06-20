import React from "react";
import BlogCard from "./BlogCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const CardSlider = (props) => {
  // let firstBlog = props.cardData[0];
  // const category = firstBlog.category;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.3,
      // slidesToSlide: 4,
      // partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      // slidesToSlide: 2,
      // partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      // slidesToSlide: 1,
      // partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <>
      <div
      // style={{ backgroundColor: "#e7e9eb" }}
      // className="my-own-custom-container"
      >
        <Carousel partialVisible={true} responsive={responsive}>
          {props.cardData.map((data) => {
            return <BlogCard blogData={data} />;
          })}
        </Carousel>

      </div>
    </>
  );
};

export default CardSlider;
