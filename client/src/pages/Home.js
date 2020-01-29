import React, { Component } from "react";

import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Welcome from "../components/Welcome";
import LearnMore from "../components/LearnMore";
import Info from "../components/Info";
import Professional from "../components/Professional";
import Feature1 from "../components/Feature1";
import Feature2 from "../components/Feature2";
import Feature3 from "../components/Feature3";
import Feature4 from "../components/Feature4";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Link } from "react-router-dom";



class Home extends Component {
    render() {
        return(
            <div>
                <Nav></Nav>
                <Jumbotron></Jumbotron>
                <Welcome></Welcome>
                <LearnMore></LearnMore>
                <Info></Info>
                <Professional></Professional>
                <Feature1></Feature1>
                <Feature2></Feature2>
                <Feature3></Feature3>
                <Feature4></Feature4>
                <Footer></Footer>
            </div>
        );
    
    };    

}

export default Home;