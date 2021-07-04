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
  const [loadingRecent, setLoadingRecent] = useState(true);
  const recentCardGet = () => {
    let url = baseUrl + "Blog/Recent";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setRecentCard(json);
        setLoadingRecent(false);
      });
  };

  /*api call for Popular Blogs*/
  const [popularCard, setPopularCard] = useState([]);
  const [loadingPopular, setLoadingPopular] = useState(true);
  const popularCardGet = () => {
    let url = baseUrl + "Blog/Popular";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPopularCard(json);
        setLoadingPopular(false);
      });
  };

  /*api call for Education Blogs*/
  const [educationCard, setEducationCard] = useState([]);
  const [loadingEducation, setLoadingEducation] = useState(true);
  const educationCardGet = () => {
    let url = baseUrl + "Blog/GetBlogsByCategory/education";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setEducationCard(json);
        setLoadingEducation(false);
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
      {loadingRecent && <div className="d-flex justify-content-center"><span className="spinner-border" role="status" style={{ width: "4rem", height: "4rem" }}></span></div>}
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
      {loadingPopular && <div className="d-flex justify-content-center"><span className="spinner-border" role="status" style={{ width: "4rem", height: "4rem" }}></span></div>}
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
      {loadingEducation && <div className="d-flex justify-content-center"><span className="spinner-border" role="status" style={{ width: "4rem", height: "4rem" }}></span></div>}
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
        <span className="d-flex justify-content-start">Contribute your article.&nbsp;<a target="_blank" href="https://forms.gle/spTrbXYqMtusKf26A">Click here</a>&nbsp;to know more.</span>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
