import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default class Priv extends Component {
    render() {
        return (
            <Jumbotron
                fluid
                style={{ backgroundColor: "#d45d79", marginBottom: "0px" }}
            >
                <Container>
                    <p
                        style={{
                            fontSize: "5vh",
                            textAlign: "center",
                            color: "white"
                        }}
                    >
                        Privacy Policy
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}
