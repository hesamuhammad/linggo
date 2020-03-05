import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import Why1 from "../images/document.svg";
import Why2 from "../images/project.svg";
import Why3 from "../images/sharing.svg";
import Why4 from "../images/transfer.svg";

export default class WhyUs extends Component {
    render() {
        return (
            <div>
                <div style={{ margin: "auto", textAlign: "center" }}>
                    <Row
                        justify="space-around"
                        gutter={16}
                        style={{ margin: "auto" }}
                    >
                        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
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
                                    <p>
                                        letter translations
                                        <br/>
                                        -
                                        <br/>
                                        commercial documents translations
                                        <br/>
                                        -
                                        <br/>
                                        marketing materials translations
                                        <br/>
                                        -
                                        <br/>
                                        legal documents translations
                                    </p>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
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
                                    <p>
                                        authentication of documents
                                        <br/>
                                        -
                                        <br/>
                                        certify the signature identify the seal
                                        <br/>
                                        -
                                        <br/>
                                        involves several entities legalization
                                        <br/>
                                        -
                                        <br/>
                                        higher government authority
                                    </p>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
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
                                    <p>
                                        penetrate foreign markets
                                        <br/>
                                        -
                                        <br/>
                                        reach new clients or consumer groups
                                        <br/>
                                        -
                                        <br/>
                                        increase international sales gain a competitive
                                        <br/>
                                        -
                                        <br/>
                                        advantage over regional rivals
                                    </p>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
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
                                    <p>
                                        software applications
                                        <br/>
                                        -
                                        <br/>
                                        html, PHP, javascript and flash files
                                        <br/>
                                        -
                                        <br/>
                                        open source andproprietary CMS systems
                                        <br/>
                                        -
                                        <br/>
                                        multimedia files
                                    </p>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
