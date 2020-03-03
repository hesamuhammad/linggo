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
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    marginTop: "3%",
                    marginBottom: "3%"
                }}
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
                                style={{ backgroundColor: "#d8d8d8" }}
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
                            >
                                <p style={{ fontWeight: "bold" }}>
                                    <br />
                                    letter translations
                                    <br />
                                    commercial documents translations
                                    <br />
                                    marketing materials translations
                                    <br />
                                    legal documents translations
                                </p>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div className="gutter-box">
                            <Card
                                title="Apostile & Legalization"
                                bordered={false}
                                style={{ backgroundColor: "#ACBFAD" }}
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
                            >
                                <p style={{ fontWeight: "bold" }}>
                                    authentication of documents
                                    <br />
                                    certify the signature identify the seal
                                    <br />
                                    involves several entities legalization
                                    <br />
                                    higher government authority
                                </p>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div className="gutter-box">
                            <Card
                                title="Localization Services"
                                bordered={false}
                                style={{ backgroundColor: "#d8d8d8" }}
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
                            >
                                <p style={{ fontWeight: "bold" }}>
                                    penetrate foreign markets
                                    <br />
                                    reach new clients or consumer groups
                                    <br />
                                    increase international sales gain a
                                    competitive
                                    <br />
                                    advantage over regional rivals
                                </p>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <div className="gutter-box">
                            <Card
                                title="Website Translation"
                                bordered={false}
                                style={{ backgroundColor: "#ACBFAD" }}
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
                            >
                                <p style={{ fontWeight: "bold" }}>
                                    software applications
                                    <br />
                                    html, PHP, javascript and flash files
                                    <br />
                                    open source andproprietary CMS systems
                                    <br />
                                    multimedia files
                                </p>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
