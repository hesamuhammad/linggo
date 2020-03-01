import React, { Component } from "react";
import BreadAbout from "../components/BreadAbout";
import WhyUs from "./WhyUs";
import About from "../components/About";

export default class Aboutus extends Component {
    render() {
        return (
            <div>
                <BreadAbout />
                <h2>Ini About Us</h2>
                <WhyUs />
                <About />
            </div>
        );
    }
}
