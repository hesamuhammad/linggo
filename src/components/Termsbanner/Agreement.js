import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default class Agreement extends Component {
    render() {
        return (
            <Jumbotron
                fluid
                style={{ backgroundColor: "#ea9085", marginBottom: "0px" }}
            >
                <Container>
                    <p
                        style={{
                            fontSize: "5vh",
                            textAlign: "center",
                            color: "white"
                        }}
                    >
                        Translator Agreement
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}
