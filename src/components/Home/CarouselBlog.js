import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { Card } from "antd";

const { Meta } = Card;

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 3500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: 500
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        autoplay: true,
                        autoplaySpeed: 500
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 500
                    }
                }
            ]
        };
        return (
            <div>
                <p
                    style={{
                        fontSize: "5vh",
                        fontWeight: "bold",
                        textAlign: "center"
                    }}
                >
                    Our Blog
                </p>
                <Slider {...settings}>
                    <Container>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://www.adazing.com/wp-content/uploads/2019/02/stacked-book-clipart-11-300x300.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."
                            />
                        </Card>
                    </Container>
                    <Container>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://www.adazing.com/wp-content/uploads/2019/02/stacked-book-clipart-11-300x300.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."
                            />
                        </Card>
                    </Container>
                    <Container>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://www.adazing.com/wp-content/uploads/2019/02/stacked-book-clipart-11-300x300.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."
                            />
                        </Card>
                    </Container>
                    <Container>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://www.adazing.com/wp-content/uploads/2019/02/stacked-book-clipart-11-300x300.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."
                            />
                        </Card>
                    </Container>
                    <Container>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://www.adazing.com/wp-content/uploads/2019/02/stacked-book-clipart-11-300x300.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."
                            />
                        </Card>
                    </Container>
                    <Container>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://www.adazing.com/wp-content/uploads/2019/02/stacked-book-clipart-11-300x300.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."
                            />
                        </Card>
                    </Container>
                    <Container>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://www.adazing.com/wp-content/uploads/2019/02/stacked-book-clipart-11-300x300.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."
                            />
                        </Card>
                    </Container>
                    <Container>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://www.adazing.com/wp-content/uploads/2019/02/stacked-book-clipart-11-300x300.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page."
                            />
                        </Card>
                    </Container>
                </Slider>
            </div>
        );
    }
}
