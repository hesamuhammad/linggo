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
                    margin: "auto",
                    textAlign: "center",
                    paddingLeft: "15%",
                    paddingRight: "15%",
                    marginTop: "5%",
                    marginBottom: "3%"
                }}
                data-aos="fade-right"
                data-aos-duration="2500"
            >
                <Row
                    justify="space-around"
                    gutter={16}
                    style={{ margin: "auto" }}
                >
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div className="gutter-box">
                            <Card
                                title="Documents Translation"
                                bordered={false}
                                cover={
                                    <img
                                        src={Why1}
                                        alt="terjemah dokumen"
                                        style={{
                                            maxWidth: "12vh",
                                            display: "inline"
                                        }}
                                    />
                                }
                            ></Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div className="gutter-box">
                            <Card
                                title="Apostile & Legalization"
                                bordered={false}
                                cover={
                                    <img
                                        src={Why2}
                                        alt="legalisasi"
                                        style={{
                                            maxWidth: "12vh",
                                            display: "inline"
                                        }}
                                    />
                                }
                            ></Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div className="gutter-box">
                            <Card
                                title="Localization Services"
                                bordered={false}
                                cover={
                                    <img
                                        src={Why3}
                                        alt="servis lokal"
                                        style={{
                                            maxWidth: "12vh",
                                            display: "inline"
                                        }}
                                    />
                                }
                            ></Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div className="gutter-box">
                            <Card
                                title="Website Translation"
                                bordered={false}
                                cover={
                                    <img
                                        src={Why4}
                                        alt="terjemah website"
                                        style={{
                                            maxWidth: "12vh",
                                            display: "inline"
                                        }}
                                    />
                                }
                            ></Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
