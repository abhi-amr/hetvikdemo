import React from "react";
import BlogCard from "./BlogCard";
import imageSrc from "./sop.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardSlider = (props) => {
  const myStyleCard = {
    backgroundColor: "#e7e9eb",
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <>
      <div
        style={{ backgroundColor: "#e7e9eb" }}
        className="my-own-custom-container"
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
