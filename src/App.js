import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homePage/homePage";
import AboutPage from "./components/aboutPage/aboutPage";
import SummerCampPage from "./components/summerCampPage/summerCampPage";
import ServicesPage from "./components/servicesPage/servicesPage";
import ProgrammesPage from "./components/programmesPage/programmesPage";
import Contact from "./components/utils/contact";
import JoinUsPage from "./components/joinUsPage/joinUsPage";
import NavBar from "./components/utils/navBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/about">
              <NavBar />
              <AboutPage />
            </Route>
            <Route path="/programmes/summerCamp">
              <NavBar />
              <SummerCampPage />
            </Route>
            <Route path="/programmes/18years">
              <NavBar />
              <ProgrammesPage />
            </Route>
            <Route path="/programmes/16years">
              <NavBar />
              <ProgrammesPage />
            </Route>
            <Route path="/services">
              <NavBar />
              <ServicesPage />
            </Route>
            <Route path="/contact">
              <NavBar />
              <Contact />
            </Route>
            <Route path="/joinUs">
              <JoinUsPage />
            </Route>
            <Route path="/">
              <NavBar />
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
