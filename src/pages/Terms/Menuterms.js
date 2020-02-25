import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default class Menuterms extends Component {
    render() {
        return (
            <div style={{ marginBottom: "5%" }}>
                <Layout className="layout">
                    <Header>
                        {/* <div className="logo" /> */}
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            // defaultSelectedKeys={["0"]}
                            style={{
                                lineHeight: "64px",
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <Menu.Item key="1" href="/pricing">
                                <Link to="/terms-of-service">
                                    Terms Of Service
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/terms-of-service/privacy-policy/">
                                    Privacy Policy
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/terms-of-service/translator-agreement/">
                                    Translator Agreement
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/terms-of-service/translator-nda/">
                                    Translator NDA
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
            </div>
        );
    }
}
