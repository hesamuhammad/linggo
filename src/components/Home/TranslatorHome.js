import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./TranslatorLooking.css";

export default class TranslatorLooking extends Component {
    render() {
        return (
            <div
                style={{
                    marginTop: "2%",
                    marginBottom: "5%",
                    paddingBottom: "2%"
                }}
            >
                <Container>
                    <Row>
                        <Col xs={6} className="leftside"></Col>
                        <Col xs={6}>
                            <div
                                class="card-body"
                                style={{ backgroundColor: "#d8d8d8" }}
                            >
                                <p
                                    class="card-title"
                                    style={{
                                        fontSize: "4vh",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Join our translation team ? <br />
                                </p>
                                <p
                                    class="card-text"
                                    style={{ fontSize: "2.5vh" }}
                                >
                                    With thousands of projects available each
                                    day
                                    <br />
                                    you can find and work on translations that
                                    interest you.
                                </p>
                                <a
                                    href="/translators"
                                    class="btn btn-primary"
                                    target="_blank"
                                    style={{
                                        paddingLeft: "15%",
                                        paddingRight: "15%",
                                        backgroundColor: "#283e2e",
                                        borderColor: "#283e2e",
                                        fontWeight: "bold"
                                    }}
                                >
                                    BECOME A TRANSLATOR
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
