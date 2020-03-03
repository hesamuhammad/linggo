import React, { Component } from "react";
import Carousel from "../components/Home/Carousel";
import Testimonial from "../components/Home/Testimonial";
import Pros from "../components/Home/Pros";
import CaroselBlog from "../components/Home/CarouselBlog";
import ServiceCard from "../components/ServiceCard";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <ServiceCard />
                <Pros />
                <Testimonial />
                <CaroselBlog />
            </div>
        );
    }
}
