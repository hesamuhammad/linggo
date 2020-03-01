import React, { Component } from "react";
import BreadAbout from "../components/BreadAbout";
import WhyUs from "./WhyUs";
import About from "../components/About";
import { Row, Col } from "antd";
import Trans from "../assets/images/trans.jpg";

export default class Aboutus extends Component {
    render() {
        return (
            <div>
                <BreadAbout />
                <Row style={{ padding: "15px 0" }}>
                    <Col xs={0} sm={2} md={4} lg={4} xl={2}></Col>
                    <Col xs={24} sm={20} md={16} lg={16} xl={20}>
                        <WhyUs />
                    </Col>
                    <Col xs={0} sm={2} md={4} lg={4} xl={2}></Col>
                </Row>
                <Row>
                    <Col xs={1} sm={2} md={4} lg={4} xl={2}></Col>
                    <Col xs={22} sm={20} md={16} lg={16} xl={20}>
                        <About />
                    </Col>
                    <Col xs={1} sm={2} md={4} lg={4} xl={2}></Col>
                </Row>
            </div>
        );
    }
}
