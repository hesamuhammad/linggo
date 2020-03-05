import React, { Component } from "react";
import BreadAbout from "../components/BreadAbout";
import WhyUs from "../components/WhyUs";
import About from "../components/About";
import { Row } from "antd";

export default class Aboutus extends Component {
    render() {
        return (
            <div>
                <BreadAbout />
                <Row style={{ padding: "15px 0" }}>
                    <WhyUs />
                </Row>
                <Row>
                    <About />
                </Row>
            </div>
        );
    }
}
