import React, { Component } from "react";
import Qpaper from "../../components/Home/Qpaper";
import MyOneCarousel from "../../components/MyLandingFirstSection/MyOneImgCarousel";
import WhatWeOffer from "../../components/AboutUs/WhatWeOffer";
import CoreTeam from "../../components/AboutUs/CoreTeam";
import Font, { Text } from 'react-font';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "../../components/bootstrap.min.css";
import Heading from "../../components/Utilities/Heading";
import JumbotronDiv from "../../components/MyLandingFirstSection/JumbotronDiv";
import {Helmet} from "react-helmet";

class Home extends Component {
    render() {
        return(
            <div className="home">
                <Helmet>
                    <title>Hetvik | Homepage</title>
                    <meta name="description" content="Hetvik is a platform build for the student by the student" />
                    <meta name="keyword" content="Hetvik" />
                    
                </Helmet>
                
                <JumbotronDiv />
                {/* <MyOneCarousel /> */}

                <Container>
                <Heading content="Quick Links" />
                <Qpaper />
                
                <Heading content="What We Offer" />
                <WhatWeOffer />
                
                <Heading content="Our Core Team" />
                <CoreTeam/>
                </Container>

                <br /> <br /> <br />
            </div>
            )
    }
}

export default Home;

