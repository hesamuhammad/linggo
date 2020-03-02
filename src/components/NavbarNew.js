import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Drawer from "./Drawer/Drawer";
import Image from "../assets/images/logo_transparent.png";

export default class NavbarNew extends Component {
    render() {
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand href="/">
                        <div style={{ maxWidth: "18vh" }}>
                            <img
                                src={Image}
                                alt="linggo"
                                style={{ width: "100%" }}
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/pricing">PRICING</Nav.Link>
                            <Nav.Link href="/service">SERVICES</Nav.Link>
                            <Nav.Link href="/aboutus">ABOUT LINGGO</Nav.Link>
                            <Nav.Link href="/contactus">CONTACT US</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <Drawer />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="/signin">
                                SIGN IN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
