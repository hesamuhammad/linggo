import React from "react";
import { Card, Divider } from "antd";
import { Col, Row } from "react-bootstrap";
import "../App.css";

export default function PricingCard() {
    return (
        <div
            style={{
                textAlign: "center",
                marginLeft: "14%",
                marginRight: "14%",
                marginBottom: "2%",
                paddingRight: "3%",
                paddingLeft: "3%"
            }}
        >
            <Row
                align="middle"
                justify="space-around"
                gutter={[16, 16]}
                style={{
                    paddingLeft: "3%",
                    paddingRight: "3%",
                    backgroundColor: "#ACBFAD",
                    paddingTop: "3%",
                    paddingBottom: "5%"
                }}
            >
                <Col xs={12} md={4} style={{ marginTop: "2%" }}>
                    <Card
                        hoverable
                        bordered={false}
                        style={{
                            height: "100%",
                            maxWidth: "300px",
                            marginTop: "2%"
                        }}
                    >
                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: "2.5vh"
                            }}
                        >
                            General
                        </p>
                        <Divider />

                        <p
                            className="titleFont pricecard"
                            style={{ fontSize: "2vh" }}
                        >
                            $ 0.11
                            <br />
                            per word
                        </p>

                        <p className="desFont" style={{ fontSize: "2vh" }}>
                            Good for internal use:
                            <br />
                            Social Media Post
                            <br />
                            User Generated Content
                            <br />
                            Articles
                            <br />
                            Letters
                            <br />
                            Brochures
                            <br />
                            CVs
                            <br />
                        </p>
                    </Card>
                </Col>
                <Col xs={12} md={4} style={{ marginTop: "2%" }}>
                    <Card
                        hoverable
                        bordered={false}
                        style={{
                            height: "100%",
                            maxWidth: "300px",
                            marginTop: "2%"
                        }}
                    >
                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: "2.5vh"
                            }}
                        >
                            Specialized
                        </p>
                        <Divider />
                        <p
                            className="titleFont pricecard"
                            style={{ fontSize: "2vh" }}
                        >
                            $ 0.14
                            <br />
                            per word
                        </p>
                        <p className="desFont" style={{ fontSize: "2vh" }}>
                            Best for professional content:
                            <br />
                            Training manuals
                            <br />
                            Clinical trials
                            <br />
                            RFPs
                            <br />
                            User Interface & string
                            <br />
                        </p>
                    </Card>
                </Col>
                <Col xs={12} md={4} style={{ marginTop: "2%" }}>
                    <Card
                        hoverable
                        bordered={false}
                        style={{
                            height: "100%",
                            maxWidth: "300px",
                            marginTop: "2%"
                        }}
                    >
                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: "2.5vh"
                            }}
                        >
                            NAATI Certified
                        </p>
                        <Divider />
                        <p
                            className="titleFont pricecard"
                            style={{ fontSize: "2vh" }}
                        >
                            $ 0.17
                            <br />
                            per word
                        </p>

                        <p className="desFont" style={{ fontSize: "2vh" }}>
                            For your legal and immigration translation needs.
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
