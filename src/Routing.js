import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeMain from "./home/HomeMain";
import "./styles/main.scss";
import "./styles/animation.scss";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeMain} />
      </Switch>
    </Router>
  );
}

export default Routing;
