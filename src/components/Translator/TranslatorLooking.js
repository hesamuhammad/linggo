import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "./TranslatorLooking.css";

export default class TranslatorLooking extends Component {
    render() {
        return (
            <div
                style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    backgroundColor: "#d8d8d8",
                    paddingTop: "2%",
                    paddingBottom: "2%"
                }}
            >
                <Row>
                    <Col xs={6} className="leftside"></Col>
                    <Col xs={6}>
                        <div class="card-body">
                            <p
                                class="card-title"
                                style={{ fontSize: "4vh", fontWeight: "bold" }}
                            >
                                Looking to hire freelance <br />
                                translators?
                            </p>
                            <p class="card-text" style={{ fontSize: "2.5vh" }}>
                                Get high-quality translation from professional
                                translators <br />
                                within hours.
                            </p>
                            <a
                                href="/"
                                class="btn btn-primary"
                                style={{
                                    paddingLeft: "15%",
                                    paddingRight: "15%",
                                    backgroundColor: "#283e2e",
                                    borderColor: "#283e2e",
                                    fontWeight: "bold"
                                }}
                            >
                                LEARN MORE
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
