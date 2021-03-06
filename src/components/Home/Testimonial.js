import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Avatar } from "antd";

class Testimonials extends Component {
    state = {
        post: []
    };

    componentDidMount() {
        axios
            .get("https://5e3134bf576f9d0014d644c4.mockapi.io/user")
            .then(result => {
                this.setState({
                    post: result.data
                });
            });
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 3500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
        };
        return (
            <div
                style={{
                    backgroundColor: "#ACBFAD",
                    paddingTop: "2%",
                    paddingBottom: "2%",
                    marginLeft: "5%",
                    marginRight: "5%"
                }}
            >
                <p
                    style={{
                        fontSize: "5vh",
                        fontWeight: "bold",
                        textAlign: "center"
                    }}
                >
                    Testimonials
                </p>
                <Slider {...settings}>
                    {this.state.post.length > 0 &&
                        this.state.post.map(post => {
                            // console.log(post);

                            return (
                                <div>
                                    <div
                                        key={post.id}
                                        style={{ textAlign: "center" }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center"
                                            }}
                                        >
                                            <Avatar
                                                size={120}
                                                src={post.image}
                                                icon="user"
                                            />
                                            {/* <Avatar size="large" /> */}
                                        </div>
                                        <p
                                            style={{
                                                fontSize: "2vh",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {post.name}
                                            <br />{" "}
                                            <span style={{ color: "red" }}>
                                                client
                                            </span>
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "2vh",
                                                fontStyle: "italic",
                                                paddingRight: "10%",
                                                paddingLeft: "10%"
                                            }}
                                        >
                                            {post.phrase}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </Slider>
            </div>
        );
    }
}

export default Testimonials;
