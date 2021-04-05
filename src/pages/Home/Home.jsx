import React, {Component} from 'react';
import Qpaper from "../../components/Home/Qpaper";
import MyOneCarousel from "../../components/MyLandingFirstSection/MyOneImgCarousel";
import WhatWeOffer from "../../components/AboutUs/WhatWeOffer";
import CoreTeam from "../../components/AboutUs/CoreTeam";
import Font, { Text } from 'react-font';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';

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
                
                <Container>
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
                <CoreTeam/>
                </Container>

                <br /> <br /> <br />
            </div>
            )
    }
}

export default Home;