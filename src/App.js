import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavBarIna";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";


function App() {
    return (
        <Router>
            <Navbar />
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
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
