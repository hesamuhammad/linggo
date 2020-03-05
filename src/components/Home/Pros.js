import React, { Component, Fragment } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Icon } from "antd";

export default class Pros extends Component {
    render() {
        return (
            <div style={{ marginTop: "3%", marginBottom: "2%" }}>
                <Fragment>
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "4.5vh",
                            fontWeight: "bold"
                        }}
                    >
                        How does Linggo work?
                    </p>
                    <img
                        src="https://gengo.com/wp-content/uploads/2017/07/how-gengo-works.jpg"
                        style={{ width: "100%", marginTop: "10px" }}
                        alt="linggo"
                    />
                </Fragment>
                <Fragment>
                    <div
                        style={{
                            background: "white",
                            display: "flex",
                            justifyContent: "center",
                            paddingLeft: "12%",
                            paddingRight: "12%"
                        }}
                    >
                        <CardGroup>
                            <Card
                                style={{
                                    borderStyle: "none",
                                    margin: "2%"
                                }}
                            >
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: "bold" }}>
                                        Fast turnaround
                                    </Card.Title>
                                    <Card.Text>
                                        Our transparent per-word pricing is a
                                        fraction of the cost of traditional
                                        agencies so you can drive business in
                                        new markets at competitive rates.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer
                                    style={{ backgroundColor: "white" }}
                                >
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "14px"
                                        }}
                                    >
                                        <Icon
                                            type="check"
                                            style={{
                                                paddingRight: "2%",
                                                color: "green",
                                                fontWeight: "bold",
                                                fontSize: "2.5vh"
                                            }}
                                        />
                                        No add-ons or minimum spend
                                        <br />
                                        <Icon
                                            type="check"
                                            style={{
                                                paddingRight: "2%",
                                                color: "green",
                                                fontWeight: "bold",
                                                fontSize: "2.5vh"
                                            }}
                                        />
                                        Competitive pricing
                                    </p>
                                </Card.Footer>
                            </Card>
                            <Card
                                style={{
                                    borderStyle: "none",
                                    margin: "2%"
                                }}
                            >
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: "bold" }}>
                                        Efficiency
                                    </Card.Title>
                                    <Card.Text>
                                        With 21,000+ certified translators
                                        working across all major time zones, we
                                        can comfortably keep pace with your
                                        content needs, no matter the volume.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer
                                    style={{ backgroundColor: "white" }}
                                >
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "14px"
                                        }}
                                    >
                                        <Icon
                                            type="check"
                                            style={{
                                                paddingRight: "2%",
                                                color: "green",
                                                fontWeight: "bold",
                                                fontSize: "2.5vh"
                                            }}
                                        />
                                        70+ language pairs
                                        <br />
                                        <Icon
                                            type="check"
                                            style={{
                                                paddingRight: "2%",
                                                color: "green",
                                                fontWeight: "bold",
                                                fontSize: "2.5vh"
                                            }}
                                        />
                                        5M+ words translated weekly
                                    </p>
                                </Card.Footer>
                            </Card>
                            <Card
                                style={{
                                    borderStyle: "none",
                                    margin: "2%"
                                }}
                            >
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: "bold" }}>
                                        Human quality
                                    </Card.Title>
                                    <Card.Text>
                                        Our integrated API and built-in quality
                                        tools eliminate workflow inefficiency
                                        and boost consistency and quality across
                                        projects.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer
                                    style={{ backgroundColor: "white" }}
                                >
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "14px"
                                        }}
                                    >
                                        <Icon
                                            type="check"
                                            style={{
                                                paddingRight: "2%",
                                                color: "green",
                                                fontWeight: "bold",
                                                fontSize: "2.5vh"
                                            }}
                                        />
                                        Advanced, intuitive platform
                                        <br />
                                        <Icon
                                            type="check"
                                            style={{
                                                paddingRight: "2%",
                                                color: "green",
                                                fontWeight: "bold",
                                                fontSize: "2.5vh"
                                            }}
                                        />
                                        Simple order management
                                    </p>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </div>
                </Fragment>
            </div>
        );
    }
}
