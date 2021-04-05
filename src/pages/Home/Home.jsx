import React, {Component} from 'react';
import Qpaper from "../../components/Home/Qpaper";
import MyCarousel from "../../components/MyLandingFirstSection/MyCarousel";
import MyOneCarousel from "../../components/MyLandingFirstSection/MyOneImgCarousel";
import WhoWeAre from "../../components/AboutUs/WhoWeAre";
import GoalsMission from "../../components/AboutUs/GoalsMission";
import Team from "../../components/AboutUs/Team";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div className="home">
                <MyOneCarousel />
                {/* <MyCarousel /> */}
                <Qpaper />
                <GoalsMission/>
                <WhoWeAre />
                <Team/>
            </div>
            )
    }
}

export default Home;