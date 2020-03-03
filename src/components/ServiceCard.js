import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";

export default class ServiceCard2 extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Row
                    align="middle"
                    justify="space-around"
                    gutter={[16, 16]}
                    style={{
                        margin: "0 auto",
                        padding: "1% 10%",
                        backgroundColor: "#f5f5f5"
                    }}
                >
                    <Col xs={24} sm={24} md={24} lg={12} xl={6}>
                        <Link to="/service#service4">
                            <Card
                                bordered={false}
                                style={{ width: 300, minHeight: "280px" }}
                                hoverable
                            >
                                <p
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "2.5vh"
                                    }}
                                >
                                    General <br />
                                    Translation{" "}
                                </p>
                                <hr style={{ opacity: "70%" }} />
                                <p>
                                    We have over 25,000 certified translation
                                    professionals working in more than 120
                                    languages to handle any project you have.
                                </p>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={6}>
                        <Card
                            bordered={false}
                            style={{ width: 300, minHeight: "280px" }}
                            hoverable
                        >
                            <p
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "2.5vh"
                                }}
                            >
                                Localization & Transcreation
                            </p>
                            <hr style={{ opacity: "70%" }} />
                            <p>
                                It for those clients who want to add English
                                language to their business/corporate w but are
                                not excited by the idea of a literal
                                translation.
                            </p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={6}>
                        <Card
                            bordered={false}
                            style={{ width: 300, minHeight: "280px" }}
                            hoverable
                        >
                            <p
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "2.5vh"
                                }}
                            >
                                Subtitling & Transtitling
                            </p>
                            <hr style={{ opacity: "70%" }} />
                            <p>
                                Movies
                                <br />
                                TV Shows
                                <br />
                                Conferences
                                <br />
                                Documentaries
                                <br />
                                Research
                                <br />
                                Interviews
                            </p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={6}>
                        <Card
                            bordered={false}
                            style={{ width: 300, minHeight: "280px" }}
                            hoverable
                        >
                            <p
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "2.5vh"
                                }}
                            >
                                NAATI Certified & Sworn Translations
                            </p>
                            <hr style={{ opacity: "70%" }} />
                            <p>
                                Identity Documents
                                <br />
                                Educational Transcripts <br />
                                Affidavits & Sworn Testimonies
                                <br />
                                Notarized Deeds
                                <br />
                                Judicial Decisions
                            </p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
