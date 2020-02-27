import React, { Component } from "react";
import Carousel from "../components/Home/Carousel";
import Testimonial from "../components/Home/Testimonial";
import Pros from "../components/Home/Pros";
import CaroselBlog from "../components/Home/CarouselBlog";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Pros />
                <Testimonial />
                <CaroselBlog />
            </div>
        );
    }
}
