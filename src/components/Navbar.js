import React, { Component } from "react";
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
                            <Menu.Item key="1">Home</Menu.Item>
                            <Menu.Item key="2">Pricing</Menu.Item>
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
