import React, { Component } from "react";

import Nav from "../components/Nav";
import Jumbo4 from "../components/Jumbo4";
import Facts1 from "../components/Facts1";
import Facts2 from "../components/Facts2";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import Facts2 from "../components/Facts2";


class About extends Component {
    render() {
        return(
            <div>
                <Nav></Nav>
                <Jumbo4></Jumbo4>
                <Facts1></Facts1>
                <Facts2></Facts2>
                <Footer></Footer>
            </div>
        );
    
    };


}

export default About;