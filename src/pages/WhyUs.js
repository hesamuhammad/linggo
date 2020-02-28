import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import Why1 from "../images/document.svg";
import Why2 from "../images/project.svg";
import Why3 from "../images/sharing.svg";
import Why4 from "../images/transfer.svg";

export default class WhyUs extends Component {
    render() {
        return (
            <div
                style={{
                    paddingLeft: "7%",
                    paddingRight: "7%",
                    paddingTop: "4%"
                }}
            >
                <Row gutter={16}>
                    <Col span={6}>
                        <div className="gutter-box">
                            <Card
                                title="Documents Translation"
                                bordered={false}
                                cover={
                                    <img
                                        src={Why1}
                                        alt="terjemah dokumen"
                                        style={{
                                            width: "80px",
                                            display: "inline"
                                        }}
                                    />
                                }
                            >
                                <p>letter translations</p>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="gutter-box">
                            <Card
                                title="Apostile & Legalization"
                                bordered={false}
                                cover={
                                    <img
                                        src={Why2}
                                        alt="legalisasi"
                                        style={{
                                            width: "80px",
                                            display: "inline"
                                        }}
                                    />
                                }
                            >
                                Card content
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="gutter-box">
                            <Card
                                title="Localization Services"
                                bordered={false}
                                cover={
                                    <img
                                        src={Why3}
                                        alt="servis lokal"
                                        style={{
                                            width: "80px",
                                            display: "inline"
                                        }}
                                    />
                                }
                            >
                                Card content
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="gutter-box">
                            <Card
                                title="Website Translation"
                                bordered={false}
                                cover={
                                    <img
                                        src={Why4}
                                        alt="terjemah website"
                                        style={{
                                            width: "80px",
                                            display: "inline"
                                        }}
                                    />
                                }
                            >
                                Card content
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
