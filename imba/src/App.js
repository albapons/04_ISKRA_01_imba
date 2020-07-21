import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import AboutPage from "./components/aboutPage";
import SummerCampPage from "./components/summerCampPage";
import ServicesPage from "./components/servicesPage";
import ProgrammesPage from "./components/programmesPage";
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

          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/programmes/summerCamp">
              <SummerCampPage />
            </Route>
            <Route path="/programmes/18years">
              <ProgrammesPage />
            </Route>
            <Route path="/programmes/16years">
              <ProgrammesPage />
            </Route>
            <Route path="/services">
              <ServicesPage />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/joinUs">{/* <JoinUs /> */}</Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
