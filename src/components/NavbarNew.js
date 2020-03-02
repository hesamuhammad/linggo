import React, { useState, Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Drawer from "./Drawer/Drawer";
import Image from "../assets/images/logo_transparent.png";
import Swal from "sweetalert2";
import jwt from "jwt-decode";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { loggedOut } from "../actions/users";

import "./NavbarNew.css";

const NavbarNew = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        Swal.fire({
            text: "Are You Sure to logout ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sure ?",
            timer: 2000
        }).then(result => {
            if (result.value) {
                Swal.fire(
                    "Success!",
                    "Your account has been logged out!",
                    "Succeded"
                );
                localStorage.clear();
                props.loggedOut();
                props.history.push("/");
            }
        });
    };

    const token = localStorage.getItem("token");
    let decode = "";
    if (token) {
        decode = jwt(token);
    }

    console.log(props);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
        >
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={toggle}>
                    <div style={{ maxWidth: "18vh" }}>
                        <img
                            src={Image}
                            alt="linggo"
                            style={{ width: "100%" }}
                        />
                    </div>
                </Navbar.Brand>
                <Fragment>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" isOpen={isOpen}>
                        <Nav className="mr-auto">
                            {props.users.isLogin ? (
                                <Fragment>
                                    <Nav.Link
                                        className="MenuNav"
                                        href="/service"
                                    >
                                        SERVICES
                                    </Nav.Link>
                                    <Nav.Link href="/pricing">PRICING</Nav.Link>
                                    <Nav.Link href="/aboutus">
                                        ABOUT LINGGO
                                    </Nav.Link>
                                    <Nav.Link href="/contactus">
                                        CONTACT US
                                    </Nav.Link>
                                    <Nav.Link href="/profile">
                                        MY PROFILE
                                    </Nav.Link>
                                    <Nav.Link href="/project">
                                        MY PROJECT
                                    </Nav.Link>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Nav.Link href="/service">
                                        SERVICES
                                    </Nav.Link>
                                    <Nav.Link href="/pricing">PRICING</Nav.Link>
                                    <Nav.Link href="/aboutus">
                                        ABOUT LINGGO
                                    </Nav.Link>
                                    <Nav.Link href="/contactus">
                                        CONTACT US
                                    </Nav.Link>
                                </Fragment>
                            )}
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <Drawer />
                            </Nav.Link>
                        </Nav>
                        {console.log(props.isLogin, "islog")}
                        {props.users.isLogin ? (
                            <Nav>
                                <Nav.Link eventKey={2} onClick={handleLogout}>
                                    SIGN OUT
                                </Nav.Link>
                            </Nav>
                        ) : (
                            <Nav>
                                <Nav.Link eventKey={2} href="/signin">
                                    SIGN IN
                                </Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Fragment>
            </Container>
        </Navbar>
    );
};

const mapStateToProps = state => {
    console.log(state.users);

    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loggedOut: () => dispatch(loggedOut())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(NavbarNew));
