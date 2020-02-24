import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import Service from "./pages/Service";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/pricing">
                    <Pricing />
                </Route>
                <Route exact path="/service">
                    <Service />
                </Route>
                <Route exact path="/aboutus">
                    <Aboutus />
                </Route>
                <Route exact path="/contactus">
                    <Contactus />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
