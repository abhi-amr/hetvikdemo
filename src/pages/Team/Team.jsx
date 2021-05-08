import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import FullTeam from "../../components/AboutUs/FullTeam";
import Heading from "../../components/Utilities/Heading";

export default class Team extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Our Team</title>
                    <meta name="description" content="Hetvik is a platform build for the student by the student" />
                    <meta name="keyword" content="Hetvik" />
                    <link rel="canonical" href="https://hetvik.in/team" />
                    
                </Helmet>

                <Heading content="Our Team" />
                <FullTeam />
            </div>
        )
    }
}
