import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";

export default class OurTranslator extends Component {
    render() {
        return (
            <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
                <div style={{ textAlign: "center" }}>
                    <p
                        style={{
                            fontWeight: "bold",
                            fontSize: "4vh"
                        }}
                    >
                        Our translators
                    </p>
                    <p
                        style={{
                            fontSize: "2vh"
                        }}
                    >
                        Linggo’s translators come from all walks of life, united
                        by a shared love for language and translation. <br />
                        Read their stories and find out why they work with
                        Linggo.
                    </p>
                </div>
                <div>
                    <Row>
                        <Col
                            sm
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <Card
                                style={{ width: "20rem", borderStyle: "none" }}
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://gengo.com/wp-content/uploads/2017/07/Oradjeha.jpg"
                                />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title>Oradjeha</Card.Title>
                                    <p style={{ color: "gray" }}>
                                        German to English
                                    </p>
                                    <Card.Text>
                                        "I plan to specialize in technical
                                        translation and translation studies, due
                                        to the need for translator trainers in
                                        my country."
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col
                            sm
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <Card
                                style={{ width: "20rem", borderStyle: "none" }}
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://gengo.com/wp-content/uploads/2017/07/masami.jpg"
                                />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title>Masami</Card.Title>
                                    <p style={{ color: "gray" }}>
                                        Japanese to English
                                    </p>
                                    <Card.Text>
                                        "I work part time to make sure I have
                                        time to spend with my daughter"
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col
                            sm
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <Card
                                style={{ width: "20rem", borderStyle: "none" }}
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://gengo.com/wp-content/uploads/2017/07/adrian.jpg"
                                />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title>Adrián</Card.Title>
                                    <p style={{ color: "gray" }}>
                                        Japanese to Spanish
                                    </p>
                                    <Card.Text>
                                        "I found Gengo in 2009, signed up and
                                        took the tests… I started to translate
                                        and enjoyed it."
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col
                            sm
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <Card
                                style={{ width: "20rem", borderStyle: "none" }}
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://gengo.com/wp-content/uploads/2017/07/jesse.jpg"
                                />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title>Jesse</Card.Title>
                                    <p style={{ color: "gray" }}>
                                        Japanese to English
                                    </p>
                                    <Card.Text>
                                        "Know your worth, know customers’
                                        expectations and find that balance..."
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col
                            sm
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <Card
                                style={{ width: "20rem", borderStyle: "none" }}
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://gengo.com/wp-content/uploads/2017/07/alex.jpg"
                                />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title>Alex</Card.Title>
                                    <p style={{ color: "gray" }}>
                                        Russian to English
                                    </p>
                                    <Card.Text>
                                        "I usually find a way to fall in love
                                        with every project I work on..."
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col
                            sm
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <Card
                                style={{ width: "20rem", borderStyle: "none" }}
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://gengo.com/wp-content/uploads/2017/07/meryem.jpg"
                                />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title>Meryem</Card.Title>
                                    <p style={{ color: "gray" }}>
                                        English to French Canadian
                                    </p>
                                    <Card.Text>
                                        "I often travel and take my work with me
                                        wherever I go."
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
