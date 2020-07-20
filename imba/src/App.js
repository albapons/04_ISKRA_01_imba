import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar";
import Home from "./components/home";
import Build from "./components/build";
import Raise from "./components/raise";
import Summer from "./components/summer";
import Years from "./components/years";
import Services from "./components/services";
import WeWantYou from "./components/weWantYou";
import OurTeam from "./components/ourTeam";
import Contact from "./components/contact";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          {/* <Build />
          <Raise />
          <Summer />
          <Years />
          <Services />
          <OurTeam />
          <WeWantYou />
          <Contact /> */}

          <Switch>
            <Route path="/about">{/* <About /> */}</Route>
            <Route path="/summerCamp">{/* <SummerCamp /> */}</Route>
            <Route path="/18years">{/* <18years /> */}</Route>
            <Route path="/services">{/* <Services /> */}</Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/joinUs">{/* <JoinUs /> */}</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
