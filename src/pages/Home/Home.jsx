import React, {Component} from 'react';
import Qpaper from "../../components/Home/Qpaper";
import MyCarousel from "../../components/MyLandingFirstSection/MyCarousel";
import MyOneCarousel from "../../components/MyLandingFirstSection/MyOneImgCarousel";
import WhoWeAre from "../../components/AboutUs/WhoWeAre";
import WhatWeOffer from "../../components/AboutUs/WhatWeOffer";
import GoalsMission from "../../components/AboutUs/GoalsMission";
import Team from "../../components/AboutUs/Team";
import Font, { Text } from 'react-font';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Home extends Component {
    render() {
        const hStyle = {
                width: '100%', 
                textAlign: 'center', 
                borderBottom: '1px solid #efefef',
                lineHeight: '0.1em',
                margin: '10px 0 20px' 
             } 
             
        const hSpan = { 
                 background:'#fff',
                 padding:'0 10px' 
             }
        
        return(
            <div className="home">
                <MyOneCarousel />
                
                <br /> <br /> <br />
                <Text family= "Rubik" className="text-center"><h1 style={hStyle}><span style={hSpan}><strong>Quick Links</strong></span></h1></Text>
                <br />
                <Qpaper />
                
                <br /> <br /> <br />
                <Text family= "Rubik" className="text-center"><h1 style={hStyle}><span style={hSpan}><strong>What We Offer</strong></span></h1></Text>
                <br />
                <WhatWeOffer />
                
                <br /> <br /> <br />
                <Text family= "Rubik" className="text-center"><h1 style={hStyle}><span style={hSpan}><strong>Our Core Team</strong></span></h1></Text>
                <br />
                <Team/>

                <br /> <br /> <br />
            </div>
            )
    }
}

export default Home;