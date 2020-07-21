import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import ServicesPage from "./components/servicesPage";
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
              <About />
            </Route>
            <Route path="/summerCamp">{/* <SummerCamp /> */}</Route>
            <Route path="/programmes">{/* <18years /> */}</Route>
            <Route path="/programmes">{/* <16years /> */}</Route>
            <Route path="/services">
              <ServicesPage />
            </Route>
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
