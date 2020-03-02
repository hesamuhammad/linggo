import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Col, Row } from "antd";
import Image from "../assets/images/logo_transparent.png";
import Socialmedia from "./Socialmedia";

const { Footer } = Layout;

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Footer
                        style={{
                            color: "white",
                            backgroundColor: "#3c4245",
                            paddingLeft: "5%",
                            paddingRight: "5%",
                            paddingTop: "5%"
                        }}
                    >
                        <Row
                            style={{
                                paddingLeft: "5%",
                                paddingRight: "5%",
                                paddingBottom: "1   %"
                            }}
                        >
                            <hr />
                            <Col xs={24} md={3}></Col>
                            <Col xs={24} md={5}>
                                <Link to="/">
                                    <div
                                        style={{
                                            maxWidth: "18vh",
                                            marginBottom: "3%"
                                        }}
                                    >
                                        <img
                                            src={Image}
                                            alt="linggo"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                </Link>
                                <div>
                                    <Socialmedia />
                                </div>
                            </Col>
                            <Col xs={24} md={2}></Col>
                            <Col xs={24} md={4}>
                                <div>
                                    <p>For Customers</p>
                                    <ul>
                                        <li style={{ fontSize: "2vh" }}>
                                            <Link to="/pricing" target="_blank">
                                                Pricing
                                            </Link>
                                        </li>
                                        <li style={{ fontSize: "2vh" }}>
                                            <Link to="/service" target="_blank">
                                                Service
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={24} md={4}>
                                <p>For Translator</p>
                                <ul>
                                    <li style={{ fontSize: "2vh" }}>
                                        <Link to="/translators" target="_blank">
                                            Become a translator
                                        </Link>
                                    </li>
                                    <li style={{ fontSize: "2vh" }}>
                                        <Link to="/resource" target="_blank">
                                            Resources
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={24} md={4}>
                                <p>Company</p>
                                <ul>
                                    <li style={{ fontSize: "2vh" }}>
                                        <Link to="/aboutus" target="_blank">
                                            About us
                                        </Link>
                                    </li>
                                    <li style={{ fontSize: "2vh" }}>
                                        <Link
                                            to="/terms-of-service/privacy-policy"
                                            target="_blank"
                                        >
                                            Privacy
                                        </Link>
                                    </li>
                                    <li style={{ fontSize: "2vh" }}>
                                        <Link
                                            to="/terms-of-service"
                                            target="_blank"
                                        >
                                            Terms of services
                                        </Link>
                                    </li>
                                    <li style={{ fontSize: "2vh" }}>
                                        <Link to="/our-team" target="_blank">
                                            Our team
                                        </Link>
                                    </li>
                                    <p
                                        style={{
                                            // textAlign: "right",
                                            fontSize: "1.5vh",
                                            paddingTop: "5%"
                                        }}
                                    >
                                        © Linggo Inc.
                                    </p>
                                </ul>
                            </Col>
                            <Col xs={24} md={2}></Col>
                        </Row>
                    </Footer>
                </Layout>
            </div>
        );
    }
}
