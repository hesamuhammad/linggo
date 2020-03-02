import React from "react";
import { Button } from "antd";
import "../App.css";
import { Col, Row } from "antd";
import Drawer from "./Drawer/Drawer";

export default function NavBarIna() {
    return (
        <div>
            <Row style={{ padding: "10px" }} className="gradientNav">
                <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
                <Col xs={24} sm={20} md={16} lg={16} xl={16}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Button
                            ghost
                            type="link"
                            href="/"
                            className="titleFont smallFont"
                        >
                            <b>HOME</b>
                        </Button>
                        <Button
                            ghost
                            type="link"
                            href="/pricing"
                            className="titleFont smallFont"
                        >
                            <b>PRICING</b>
                        </Button>
                        <Button
                            ghost
                            type="link"
                            href="/service"
                            className="titleFont smallFont"
                        >
                            <b>SERVICE</b>
                        </Button>
                        <Button
                            ghost
                            type="link"
                            href="/aboutus"
                            className="titleFont smallFont"
                        >
                            <b>ABOUT LINGGO</b>
                        </Button>
                        <Button
                            ghost
                            type="link"
                            href="/signin"
                            className="titleFont smallFont"
                        >
                            <b>SIGN IN</b>
                        </Button>
                        <Button
                            ghost
                            type="link"
                            // href="/contactus"
                            className="titleFont smallFont"
                        >
                            <Drawer />
                        </Button>
                    </Row>
                </Col>
                <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
            </Row>
        </div>
    );
}
