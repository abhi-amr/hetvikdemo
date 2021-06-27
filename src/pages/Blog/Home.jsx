import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


import CardSlider from "../../components/Blog/CardSlider";
import IntroSection from "../../components/Blog/IntroSection";
import Heading from "../../components/Utilities/Heading";
import baseUrl from "../../components/CommanUrl";



function Home() {
  /*api call for Recent Blogs*/
  const [recentCard, setRecentCard] = useState([]);
  const recentCardGet = () => {
    let url = baseUrl + "Blog/Recent";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setRecentCard(json);
      });
  };

  /*api call for Popular Blogs*/
  const [popularCard, setPopularCard] = useState([]);
  const popularCardGet = () => {
    let url = baseUrl + "Blog/Popular";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPopularCard(json);
      });
  };

  /*api call for Education Blogs*/
  const [educationCard, setEducationCard] = useState([]);
  const educationCardGet = () => {
    let url = baseUrl + "Blog/GetBlogsByCategory/education";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setEducationCard(json);
      });
  };

  useEffect(() => {
    recentCardGet();
    popularCardGet();
    educationCardGet();
  }, []);


  return (
    <>
      <Helmet>
        <title>Blog | Hetvik</title>
        <meta name="description" content="Patna University Blog Page" />
        <link rel="canonical" href="https://hetvik.in/blog" />
      </Helmet>

      <IntroSection />

      <Heading content="Recent Posts" />
      <CardSlider cardData={recentCard} />
      <br />
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
          <Link to="blog/recent">
            <strong>See More&gt;&gt;</strong>
          </Link>
        </div>
      </div>

      <Heading content="Popular Posts" />
      <CardSlider cardData={popularCard} />
      <br />
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
          <Link to="blog/popular">
            <strong>See More&gt;&gt;</strong>
          </Link>
        </div>
      </div>

      <Heading content="Education" />
      <CardSlider cardData={educationCard} />
      <br />
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
          <Link to="blog/category/education">
            <strong>See More&gt;&gt;</strong>
          </Link>
        </div>
      </div>

      <br />

      <div className="container-fluid">
        <span className="d-flex justify-content-end">Contribute to your article.&nbsp;<a target="_blank" href="https://forms.gle/spTrbXYqMtusKf26A">Click here</a>&nbsp;to share.</span>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
