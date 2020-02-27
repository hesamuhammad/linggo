import React, { Component } from "react";
import Slider from "react-slick";

class TestimonialsDrawer extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        const baseUrl =
            "https://s3.amazonaws.com/static.neostack.com/img/react-slick";

        return (
            <div style={{ marginTop: "15%" }}>
                <Slider {...settings}>
                    <div>
                        <img src={baseUrl + "/abstract01.jpg"} alt="image2" />
                    </div>
                    <div>
                        <img src={baseUrl + "/abstract02.jpg"} alt="image2" />
                    </div>
                    <div>
                        <img src={baseUrl + "/abstract03.jpg"} alt="image2" />
                    </div>
                    <div>
                        <img src={baseUrl + "/abstract04.jpg"} alt="image2" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default TestimonialsDrawer;
