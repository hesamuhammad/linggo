import React, { Component } from "react";
import Slider from "react-slick";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "../../assets/images/pnghome.png";
import Image2 from "../../assets/images/bulldog.png";

export default class AdaptiveHeight extends Component {
    render() {
        var settings = {
            className: "",
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
            accessibility: true
        };
        return (
            <div style={{ marginTop: "2%", marginBottom: "2%" }}>
                <Slider {...settings}>
                    <div>
                        <Container>
                            <Row
                                style={{
                                    alignItems: "center"
                                }}
                            >
                                <Col
                                    style={{
                                        alignItems: "center"
                                    }}
                                    data-aos="fade-right"
                                    data-aos-duration="2500"
                                >
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "6vh",
                                            textAlign: "center"
                                        }}
                                    >
                                        LINGGO Translation
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "2vh",
                                            textAlign: "center"
                                        }}
                                    >
                                        The only dedicated Indonesian / English
                                        boutique translation studio.
                                        <br />
                                        Who are not only translators but pride
                                        ourselves on being effective
                                        communicators.
                                    </p>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Button
                                            size="lg"
                                            style={{
                                                backgroundColor: "#283e2e",
                                                borderColor: "#283e2e"
                                            }}
                                        >
                                            <Link
                                                to="/aboutus"
                                                style={{ color: "white" }}
                                            >
                                                About Us
                                            </Link>
                                        </Button>
                                    </div>
                                </Col>
                                <Col
                                    style={{
                                        // paddingTop: "5%",
                                        // paddingBottom: "5%",
                                        alignItems: "center"
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <img
                                            src={Image}
                                            alt="flag"
                                            style={{
                                                maxWidth: 400
                                                // backgroundColor: "white"
                                            }}
                                        ></img>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Container>
                            <Row
                                style={{
                                    alignItems: "center",
                                    paddingTop: "5%",
                                    paddingBottom: "5%"
                                }}
                            >
                                <Col>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <img
                                            src={Image2}
                                            alt="flag"
                                            style={{
                                                maxWidth: 400
                                                // backgroundColor: "white"
                                            }}
                                        ></img>
                                    </div>
                                </Col>
                                <Col
                                    style={{
                                        alignItems: "center"
                                    }}
                                    data-aos="fade-left"
                                    data-aos-duration="2500"
                                >
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "6vh",
                                            textAlign: "center"
                                        }}
                                    >
                                        WHY US ?
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "2vh",
                                            textAlign: "center"
                                        }}
                                    >
                                        We ONLY offer you the highest quality
                                        translations in the following language
                                        pairs:
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                            Indonesian - English
                                        </span>
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                            Malaysian - English
                                        </span>
                                    </p>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Button
                                            size="lg"
                                            style={{
                                                display: "flex",
                                                backgroundColor: "#283e2e",
                                                borderColor: "#283e2e"
                                            }}
                                        >
                                            <Link
                                                to="/aboutus"
                                                style={{ color: "white" }}
                                            >
                                                Why Us
                                            </Link>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Slider>
            </div>
        );
    }
}
