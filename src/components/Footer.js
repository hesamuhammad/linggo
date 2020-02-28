import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Col, Row, Icon } from "antd";
import Image from "../assets/images/logo.png";

const { Footer } = Layout;

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Footer
                        style={{ color: "white", backgroundColor: "#3c4245" }}
                    >
                        <Row>
                            <Col span={6}>
                                <div style={{ marginBottom: "10px" }}>
                                    <img
                                        src={Image}
                                        alt="linggo"
                                        style={{
                                            width: "35%"
                                        }}
                                    ></img>
                                </div>
                                <p>BLOG</p>
                                <div>
                                    <Icon type="facebook" theme="filled" />
                                    <Icon type="instagram" theme="filled" />
                                    <Icon
                                        type="twitter-circle"
                                        theme="filled"
                                    />
                                </div>
                            </Col>
                            <Col span={6}>
                                <div>
                                    <p>For Customers</p>
                                    <ul>
                                        <li>
                                            <Link to="/pricing" target="_blank">
                                                Pricing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/service" target="_blank">
                                                Service
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={6}>
                                <p>For Translator</p>
                                <ul>
                                    <li>
                                        <Link to="/translators" target="_blank">
                                            Become a translator
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/resource" target="_blank">
                                            Resources
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col span={6}>
                                <p>Company</p>
                                <ul>
                                    <li>
                                        <Link to="/aboutus" target="_blank">
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/terms-of-service/privacy-policy"
                                            target="_blank"
                                        >
                                            Privacy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/terms-of-service"
                                            target="_blank"
                                        >
                                            Terms of services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/our-team" target="_blank">
                                            Our team
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <hr />
                        <p style={{ textAlign: "right" }}>
                            Linggo ©2020 Created by Linggo Inc.
                        </p>
                    </Footer>
                </Layout>
            </div>
        );
    }
}
