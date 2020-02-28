import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import Service from "./pages/Service";
import Aboutus from "./pages/Aboutus";
import ContactUs from "./pages/ContactUs";
import Termsofservice from "./pages/Terms/Termsofservice";
import Privacy from "./pages/Terms/Privacy";
import Translatoragree from "./pages/Terms/Translatoragree";
import TranslatorNDA from "./pages/Terms/TranslatorNDA";
import Signin from "./pages/Users/Signin";
import Signup from "./pages/Users/Signup";
import Ourteam from "./pages/Team/Ourteam";
import Translator from "./pages/Translator/TranslatorPage";
import Profile from "./pages/Profile";
import Project from "./pages/Project";

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
                    <ContactUs />
                </Route>
                <Route exact path="/signin">
                    <Signin />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/our-team">
                    <Ourteam />
                </Route>
                <Route exact path="/terms-of-service">
                    <Termsofservice />
                </Route>
                <Route exact path="/terms-of-service/privacy-policy/">
                    <Privacy />
                </Route>
                <Route exact path="/terms-of-service/translator-agreement/">
                    <Translatoragree />
                </Route>
                <Route exact path="/terms-of-service/translator-nda/">
                    <TranslatorNDA />
                </Route>
                <Route exact path="/translators">
                    <Translator />
                </Route>
                <Route exact path="/pricing">
                    <Pricing />
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
