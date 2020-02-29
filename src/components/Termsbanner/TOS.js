import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default class TOS extends Component {
    render() {
        return (
            <Jumbotron
                fluid
                style={{ backgroundColor: "#6e5773", marginBottom: "0px" }}
            >
                <Container>
                    <p
                        style={{
                            fontSize: "5vh",
                            textAlign: "center",
                            color: "white"
                        }}
                    >
                        Linggo Terms of Service
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}
