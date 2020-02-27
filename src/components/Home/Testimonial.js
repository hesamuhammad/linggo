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
            .get("https://express-mongodb-users.herokuapp.com/users")
            .then(result => {
                this.setState({
                    post: result.data.data
                });
            });
    }

    render() {
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 3500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div
                style={{
                    backgroundColor: "white",
                    paddingTop: "1%",
                    paddingBottom: "1%"
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
                            console.log(post);

                            return (
                                <div key={post._id}>
                                    <div style={{ textAlign: "center" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center"
                                            }}
                                        >
                                            <Avatar
                                                size={120}
                                                src="https://pbs.twimg.com/profile_images/641008838343180289/CANkCW3I_400x400.jpg"
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
                                            {post.userName}
                                            <br />{" "}
                                            <a style={{ color: "red" }}>
                                                client
                                            </a>
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "2vh",
                                                fontStyle: "italic"
                                            }}
                                        >
                                            {post.email}
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
