import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "antd";

const { Meta } = Card;

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
                    {this.state.post.length > 0 &&
                        this.state.post.map(post => {
                            // console.log(post);

                            return (
                                <Container key={post.id}>
                                    <Card
                                        hoverable
                                        style={{ width: 400 }}
                                        cover={
                                            <img
                                                alt="example"
                                                src={post.avatar}
                                            />
                                        }
                                    >
                                        <p>
                                            {post.title3}
                                            {post.title3}
                                            {post.title3}
                                            {post.title3}
                                            {post.title3}
                                            {post.title3}
                                            {post.title3}
                                            {post.title3}
                                            {post.title3}
                                            {post.title3}
                                        </p>
                                    </Card>
                                </Container>
                            );
                        })}
                </Slider>
            </div>
        );
    }
}

export default Responsive;
