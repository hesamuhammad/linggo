import React, { Component } from "react";
import { Layout, Menu } from "antd";
import Image from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />

                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={["2"]}
                            style={{ lineHeight: "64px" }}
                        >
                            <Menu.Item key="0">
                                <Link to="/">
                                    <img
                                        src={Image}
                                        alt="linggo"
                                        style={{
                                            width: "10%"
                                            // backgroundColor: "white"
                                        }}
                                    ></img>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="1" href="/pricing">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/pricing">Pricing</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/service">Service</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/aboutus">About Us</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/contactus">Contact Us</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
            </div>
        );
    }
}
