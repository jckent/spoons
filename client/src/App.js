import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "../../../spoons/client/src/components/Nav";

import About from "./pages/About";
import Search from "./pages/Search";
import Register from "./pages/Register";

import "../../../spoons/client/src/Assets/fonts/flaticon/font/flaticon.css";
import "../../../spoons/client/src/Assets/fonts/icomoon/style.css";

import "../../../spoons/client/src/Assets/css/style.css";
import "../../../spoons/client/src/Assets/css/bootstrap.min.css";
import "../../../spoons/client/src/Assets/css/jquery.fancybox.min.css";
// import "./Assets/css/owl.carousel.min.css";  { BROKEN }
// import "./Assets/css/owl.theme.default.min.css";  { BROKEN }
import "../../../spoons/client/src/Assets/css/aos.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
