import React, { Component } from "react";
import Carousel from "../components/Home/Carousel";
import Testimonial from "../components/Home/Testimonial";
import Pros from "../components/Home/Pros";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Pros />
                <Testimonial />
            </div>
        );
    }
}
