import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["2"]}
                            style={{ lineHeight: "64px" }}
                        >
                            <Menu.Item key="1">
                                <Link to='/'>Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to='/pricing'>Pricing</Link>
                            </Menu.Item>
                            <Menu.Item key="3">Service</Menu.Item>
                            <Menu.Item key="4">About Us</Menu.Item>
                            <Menu.Item key="5">Contact Us</Menu.Item>
                            <Menu.Item key="3"></Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
            </div>
        );
    }
}
