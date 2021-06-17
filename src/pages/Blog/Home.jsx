import React, { useEffect, useState } from "react";
import TopBlogs from "../../components/Blog/TopBlogs";
import CardSlider from "../../components/Blog/CardSlider";
import Heading from "../../components/Utilities/Heading";
import { Helmet } from "react-helmet";

function Home() {
  /*api call for Recent Blogs*/
  const [recentCard, setRecentCard] = useState([]);
  const recentCardGet = () => {
    let url = "https://hetvikbackapi.azurewebsites.net/api/Blog/Recent";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setRecentCard(json);
      });
  };
  /*api call for Popular Blogs*/
  const [popularCard, setPopularCard] = useState([]);
  const popularCardGet = () => {
    let url = "https://hetvikbackapi.azurewebsites.net/api/Blog/Popular";
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
