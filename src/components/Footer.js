import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Footer style={{ textAlign: "center" }}>
                        Linggo ©2020 Created by Linggo Inc.
                    </Footer>
                </Layout>
            </div>
        );
    }
}
