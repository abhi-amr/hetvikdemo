import React, { useEffect, useState } from "react";
import TopBlogs from "../../components/Blog/TopBlogs";
import CardSlider from "../../components/Blog/CardSlider";
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
        <link rel="canonical" href="https://hetvik.in/blog/" />
      </Helmet>
      <TopBlogs />
      <Heading content="Recent" />
      <CardSlider cardData={recentCard} />
      <Heading content="Popular" />
      <CardSlider cardData={popularCard} />
    </>
  );
}

export default Home;
