import React, {Component} from 'react';
import Qpaper from "../../components/Home/Qpaper";
import MyCarousel from "../../components/MyCorousel/MyCarousel";
import WhoWeAre from "../../components/AboutUs/WhoWeAre";
import GoalsMission from "../../components/AboutUs/GoalsMission";
import Team from "../../components/AboutUs/Team";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div className="home">
                <MyCarousel />
                <Qpaper />
                <GoalsMission/>
                <WhoWeAre />
                <Team/>
            </div>
            )
    }
}

export default  Home;