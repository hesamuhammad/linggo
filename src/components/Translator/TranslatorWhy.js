import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";

export default class TranslatorWhy extends Component {
    render() {
        return (
            <div style={{ textAlign: "center", paddingTop: "2%" }}>
                <p
                    style={{
                        fontWeight: "bold",
                        fontSize: "4vh",
                        paddingBottom: "2%"
                    }}
                >
                    Why translate with us?
                </p>
                <Row style={{ paddingLeft: "10%", paddingRight: "10%" }}>
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
                                width: "18rem",
                                borderStyle: "none"
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src="https://gengo.com/wp-content/uploads/2017/07/translator_th01.png"
                            />
                            <Card.Body>
                                <Card.Title>Flexible schedule</Card.Title>
                                <Card.Text>
                                    Our global platform is active 24/7 so you
                                    can set your own schedule and work whenever
                                    you want, from wherever you want.
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
                        <Card style={{ width: "18rem", borderStyle: "none" }}>
                            <Card.Img
                                variant="top"
                                src="https://gengo.com/wp-content/uploads/2017/07/translator_th02.png"
                            />
                            <Card.Body>
                                <Card.Title>Pick and choose</Card.Title>
                                <Card.Text>
                                    With thousands of projects available each
                                    day, you can find and work on translations
                                    that interest you.
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
                        <Card style={{ width: "18rem", borderStyle: "none" }}>
                            <Card.Img
                                variant="top"
                                src="https://gengo.com/wp-content/uploads/2017/07/translator_th03.png"
                            />
                            <Card.Body>
                                <Card.Title>Supportive community</Card.Title>
                                <Card.Text>
                                    Get feedback from professionals, connect
                                    with other language lovers, give advice on
                                    translations and share ideas on our forums.
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
                        <Card style={{ width: "18rem", borderStyle: "none" }}>
                            <Card.Img
                                variant="top"
                                src="https://gengo.com/wp-content/uploads/2017/07/translator_th04.png"
                            />
                            <Card.Body>
                                <Card.Title>Latest technology</Card.Title>
                                <Card.Text>
                                    Our state-of-the-art workbench makes working
                                    on a PC, tablet or smartphone fun for both
                                    professionals and beginners.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
