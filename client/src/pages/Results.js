import React, { Component } from "react";

import Nav from "../../../src/components/Nav";
import Jumbo5 from "../../../src/components/Jumbo5";
import Result from "../../../src/components/Result";
import Footer from "../../../src/components/Footer";
import API from "../../../src/utils/API";
import { Link } from "react-router-dom";



class Results extends Component {
    render() {
        return(
            <div>
                <Nav></Nav>
                <Jumbo5></Jumbo5>
                <Result></Result>
                <Footer></Footer>
            </div>
        );
    
    };


}

export default Results;