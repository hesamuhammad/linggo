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
                    <Col
                        xs={24}
                        sm={24}
                        md={6}
                        lg={6}
                        xl={6}
                        data-aos="fade-right"
                        data-aos-duration="2500"
                    >
                        <div className="gutter-box" style={{
                                    backgroundColor: "#d8d8d8", marginBottom: "3%"
                                }}>
                        <h6 
                            style={{color:"black", textAlign: "center", paddingTop: "3%" }}>
                                Documents Translation</h6>
                            <Card
                                bordered={false}
                                style={{
                                    backgroundColor: "#d8d8d8",
                                    height: "100%"
                                }}
                                cover={
                                    <img
                                        src={Why1}
                                        alt="terjemah dokumen"
                                        style={{
                                            maxWidth: "14vh",
                                            display: "inline"
                                        }}
                                    />
                                }
                            >
                                <p style={{ fontWeight: "bold" }}>
                                    letter translations, commercial, documents
                                    translations, marketing materials
                                    translations
                                    <br />
                                    legal documents translations
                                </p>
                            </Card>
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={6}
                        lg={6}
                        xl={6}
                        data-aos="fade-right"
                        data-aos-duration="2500"
                    >
                        <div className="gutter-box" style={{
                                    backgroundColor: "#ACBFAD", marginBottom: "3%"
                                }}>
                        <h6 style={{color:"black", textAlign: "center", paddingTop: "3%"}}>
                            Apostile & Legalization</h6>
                            <Card
                                bordered={false}
                                style={{
                                    backgroundColor: "#ACBFAD",
                                    height: "100%"
                                }}
                                cover={
                                    <img
                                        src={Why2}
                                        alt="legalisasi"
                                        style={{
                                            maxWidth: "14vh",
                                            display: "inline"
                                        }}
                                    />
                                }
                            >
                                <p style={{ fontWeight: "bold" }}>
                                    authentication of documents certify the
                                    signature identify the seal involves several
                                    entities legalization higher government
                                    authority
                                </p>
                            </Card>
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={6}
                        lg={6}
                        xl={6}
                        data-aos="fade-left"
                        data-aos-duration="2500"
                    >
                        <div className="gutter-box" style={{
                                    backgroundColor: "#d8d8d8", marginBottom: "3%"
                                }}>
                        <h6 style={{color:"black", textAlign: "center", paddingTop: "3%"}}>
                            Localization Services</h6>
                            <Card
                                bordered={false}
                                style={{
                                    backgroundColor: "#d8d8d8",
                                    height: "100%"
                                }}
                                cover={
                                    <img
                                        src={Why3}
                                        alt="servis lokal"
                                        style={{
                                            maxWidth: "14vh",
                                            display: "inline"
                                        }}
                                    />
                                }
                            >
                                <p style={{ fontWeight: "bold" }}>
                                    penetrate foreign markets reach new clients
                                    or consumer groups increase international
                                    sales gain a competitive advantage over
                                    regional rivals
                                </p>
                            </Card>
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={6}
                        lg={6}
                        xl={6}
                        data-aos="fade-left"
                        data-aos-duration="2500"
                    >
                        <div className="gutter-box" style={{
                                    backgroundColor: "#ACBFAD", marginBottom: "3%"
                                }}>
                        <h6 style={{color:"black", textAlign: "center", paddingTop: "3%"}}>
                            Website Translation</h6>
                            <Card
                                bordered={false}
                                style={{
                                    backgroundColor: "#ACBFAD",
                                    height: "100%"
                                }}
                                cover={
                                    <img
                                        src={Why4}
                                        alt="terjemah website"
                                        style={{
                                            maxWidth: "14vh",
                                            display: "inline"
                                        }}
                                    />
                                }
                            >
                                <p style={{ fontWeight: "bold" }}>
                                    software applications html, PHP, javascript
                                    and flash files open source andproprietary
                                    CMS systems multimedia files
                                </p>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
