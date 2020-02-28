import React, { Component } from "react";
import Carousel from "../components/Home/Carousel";
import Testimonial from "../components/Home/Testimonial";
import Pros from "../components/Home/Pros";
import CaroselBlog from "../components/Home/CarouselBlog";
import WhyUs from "./WhyUs";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Pros />
                <WhyUs />
                <Testimonial />
                <CaroselBlog />
            </div>
        );
    }
}
