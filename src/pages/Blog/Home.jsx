import React, { useEffect, useState } from "react";
import TopBlogs from "../../components/Blog/TopBlogs";
import CardSlider from "../../components/Blog/CardSlider";
import IntroSection from '../../components/Blog/IntroSection';
// import YouMayAlsoRead from '../../components/Blog/YouMayAlsoRead';
import Heading from "../../components/Utilities/Heading";
import baseUrl from "../../components/CommanUrl";
import { Helmet } from "react-helmet";


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
  useEffect(() => {
    recentCardGet();
    popularCardGet();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Hetvik</title>
        <meta name="description" content="Patna University Blog Page" />
        <link rel="canonical" href="https://hetvik.in/blog" />
      </Helmet>
      {/* <YouMayAlsoRead /> */}
      <IntroSection />
      <Heading content="Recent Posts" />
      <CardSlider cardData={recentCard} />
      {/* <br />
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
          <Link
            to={`/category/${category}`}
          >
            <strong>See More&gt;&gt;</strong>
          </Link>
        </div>
      </div> */}
      <Heading content="Popular Posts" />
      <CardSlider cardData={popularCard} />
      <br /><br /><br />
    </>
  );
}

export default Home;
