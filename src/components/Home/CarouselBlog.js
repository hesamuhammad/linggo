import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "antd";

class Responsive extends Component {
    state = {
        post: []
    };

    componentDidMount() {
        axios
            .get("https://5e3134bf576f9d0014d644c4.mockapi.io/blog")
            .then(result => {
                this.setState({
                    post: result.data
                });
            });
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 3500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 1,
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
            <div
                style={{
                    backgroundColor: "#ACBFAD",
                    paddingTop: "2%",
                    paddingBottom: "2%",
                    marginLeft: "5%",
                    marginRight: "5%",
                    marginBottom: "2%"
                }}
            >
                <p
                    style={{
                        fontSize: "5vh",
                        fontWeight: "bold",
                        textAlign: "center",
                        paddingBottom: "1%"
                    }}
                >
                    Our Blog
                </p>
                <div
                    style={{
                        paddingLeft: "10%",
                        paddingRight: "10%"
                    }}
                >
                    <Slider {...settings}>
                        {this.state.post.length > 0 &&
                            this.state.post.map(post => {
                                // console.log(post);

                                return (
                                    <Container key={post.id}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center"
                                            }}
                                        >
                                            <Card
                                                hoverable
                                                style={{
                                                    maxWidth: "350px",
                                                    backgroundColor: "white",
                                                    borderStyle: "none",
                                                    height: "100%"
                                                }}
                                                cover={
                                                    <img
                                                        alt="example"
                                                        src={post.avatar}
                                                        style={{
                                                            backgroundColor:
                                                                "white"
                                                        }}
                                                    />
                                                }
                                            >
                                                <p
                                                    style={{
                                                        textAlign: "justify",
                                                        fontWeight: "bold",
                                                        fontsize: "2vh"
                                                    }}
                                                >
                                                    {post.title3}
                                                </p>
                                            </Card>
                                        </div>
                                    </Container>
                                );
                            })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Responsive;
