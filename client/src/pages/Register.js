import React, { Component } from "react";

import Nav from "../components/Nav";
import Jumbo3 from "../components/Jumbo3";
import Registration from "../components/Registration";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Link } from "react-router-dom";



class Register extends Component {
    render() {
        return(
            <div>
                <Nav></Nav>
                <Jumbo3></Jumbo3>
                <Registration></Registration>
                <Footer></Footer>
            </div>
        );
    
    
    };

}

export default Register;
