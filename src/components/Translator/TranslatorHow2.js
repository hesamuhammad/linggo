import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";

export default class TranslatorWhy extends Component {
    render() {
        return (
            <div style={{ textAlign: "left", paddingTop: "1%" }}>
                <Row style={{ paddingLeft: "15%", paddingRight: "15%" }}>
                    <Col
                        sm
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: 0
                        }}
                    >
                        <Card
                            style={{
                                width: "16rem",
                                borderStyle: "none"
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://gengo.com/wp-content/themes/gengo_theme/images/new_translator/Group_30.png"
                            />
                            <Card.Body>
                                <Card.Title>
                                    Sign up and get approved
                                </Card.Title>
                                <Card.Text>
                                    Create a free account and take our two-part
                                    test. Check out our translator resources for
                                    tips on how to prepare.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        sm
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: 0
                        }}
                    >
                        <Card style={{ width: "16rem", borderStyle: "none" }}>
                            <Card.Img
                                variant="top"
                                src="https://gengo.com/wp-content/themes/gengo_theme/images/new_translator/Group_29.png"
                            />
                            <Card.Body>
                                <Card.Title>Start translating</Card.Title>
                                <Card.Text>
                                    Once approved, familiarize yourself with our
                                    style guide and workbench. When you feel
                                    ready, start translating!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        sm
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: 0
                        }}
                    >
                        <Card style={{ width: "16rem", borderStyle: "none" }}>
                            <Card.Img
                                variant="top"
                                src="https://gengo.com/wp-content/themes/gengo_theme/images/new_translator/Group_28.png"
                            />
                            <Card.Body>
                                <Card.Title>Get paid</Card.Title>
                                <Card.Text>
                                    Invoicing is a thing of the past. At Gengo,
                                    translation payments are automatically added
                                    to your account.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        sm
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: 0
                        }}
                    >
                        <Card style={{ width: "16rem", borderStyle: "none" }}>
                            <Card.Img
                                variant="top"
                                src="https://gengo.com/wp-content/themes/gengo_theme/images/new_translator/Group_27.png"
                                style={{ width: "5rem" }}
                            />
                            <Card.Body>
                                <Card.Title>
                                    Pass our Pro qualification test to unlock
                                    access to more challenging projects at
                                    higher reward rates.
                                </Card.Title>
                                <Card.Text>
                                    Pass our Pro qualification test to unlock
                                    access to more challenging projects at
                                    higher reward rates.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
