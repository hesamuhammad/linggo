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
            .get("http://5e3134bf576f9d0014d644c4.mockapi.io/blog")
            .then(result => {
                this.setState({
                    post: result.data
                });
            });
    }

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 3500,
            slidesToShow: 3,
            slidesToScroll: 3,
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
            <div
                style={{
                    backgroundColor: "#f5f5f5",
                    paddingTop: "2%",
                    paddingBottom: "2%"
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
                                                    backgroundColor: "#f5f5f5",
                                                    borderStyle: "none"
                                                }}
                                                cover={
                                                    <img
                                                        alt="example"
                                                        src={post.avatar}
                                                        style={{
                                                            backgroundColor:
                                                                "#f5f5f5"
                                                        }}
                                                    />
                                                }
                                            >
                                                <p
                                                    style={{
                                                        textAlign: "center"
                                                    }}
                                                >
                                                    {post.title3}
                                                    {post.title3}
                                                    {post.title3}
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
