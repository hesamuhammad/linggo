import React from "react";
import "../App.css";

export default function PricingDetail() {
    return (
        <div
            style={{ paddingLeft: "5%", paddingRight: "5%" }}
            data-aos="fade-right"
            data-aos-duration="2500"
        >
            <p
                style={{
                    marginTop: "3%",
                    textAlign: "justify",
                    paddingBottom: "2%",
                    fontSize: "2vh"
                }}
                className="desFont"
            >
                <span style={{ fontSize: "3vh", fontWeight: "bold" }}>
                    OUR RATES{" "}
                </span>
                depend on what level the source language is at, ranging from
                standard to business language, but most of our work is for sworn
                or certified NAATI translation requests.
                <br />
                <br />
                <span style={{ fontSize: "3vh", fontWeight: "bold" }}>
                    COMPARED
                </span>{" "}
                to other translation agencies out there, our rates are more than
                competitive- we at LINGGO Translation beat our competition (who
                claim to offer the quality we do) by more than 25%. <br />
                We are able to do this because we choose to: we love what we do,
                and importantly for you, there are no project managers in the
                way of getting what you want.
                <br />
                <br />
                <span style={{ fontSize: "3vh", fontWeight: "bold" }}>
                    YOU PAY
                </span>{" "}
                for OUR service- we deliver our exceptional quality and service
                without the back-and-forth, wait times and compromises that you
                will come to expect from agencies who outsource their
                translation tasks for below-award rates.
                <br />
                <br />
                <span style={{ fontSize: "3vh", fontWeight: "bold" }}>
                    PLEASE
                </span>{" "}
                take a look at our Staff profile page for a look at our team on
                paper, check out our pricing, and then submit your document. You
                are more than welcome to contact us if you would like to work
                together to achieve larger scale language goals, or if you have
                specific requests. Once we receive your translation task we X,
                and let our in-house translations take care of the marketing
                goals or global reach that you have set for yourself or your
                company.
            </p>
        </div>
    );
}
