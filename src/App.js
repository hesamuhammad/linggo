import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavBarIna";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Service from "./pages/Service";
import Profile from "./pages/Profile";
import Project from "./pages/Project"

function App() {
  return (
    <Router>
      <Navbar className="navIndex"/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
