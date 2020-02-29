import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default class NDA extends Component {
    render() {
        return (
            <Jumbotron
                fluid
                style={{ backgroundColor: "#e9e2d0", marginBottom: "0px" }}
            >
                <Container>
                    <p style={{ fontSize: "5vh", textAlign: "center" }}>
                        Translator NDA
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}
