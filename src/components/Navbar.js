import React from "react";
import { Layout, Menu } from "antd";
import Image from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Drawer from "./Drawer/Drawer";

const { Header } = Layout;

export default class ButtonSize extends React.Component {
    state = {
        size: "large"
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <div className="logo" />

                        <Menu
                            theme="dark"
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
                            <Menu.Item key="6">
                                <Button type="primary">
                                    <Link to="/signin">Sign In</Link>
                                </Button>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Button>
                                    <Link to="/signup">Sign Up</Link>
                                </Button>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Drawer />
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
            </div>
        );
    }
}
