import React, { Component } from "react";

import Nav from "../components/Nav";
import Jumbo2 from "../components/Jumbo2";
import SearchForm from "../components/Search";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Link } from "react-router-dom";



class Search extends Component {
    render() {
        return(
            <div>
                <Nav></Nav>
                <Jumbo2></Jumbo2>
                <SearchForm/>
                <Footer></Footer>
            </div>
        );
    
    
    };

}

export default Search;
