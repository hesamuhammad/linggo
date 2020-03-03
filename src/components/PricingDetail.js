import React from "react";
import "../App.css";

export default function PricingDetail() {
    return (
        <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
            <h1
                className="titleFont"
                style={{
                    textAlign: "center",
                    fontSize: "6vh",
                    fontWeight: "bold",
                    marginBottom: "2%",
                    marginTop: "2%"
                }}
            >
                Pricing
            </h1>
            <p
                style={{
                    margin: "0 auto",
                    textAlign: "center",
                    paddingBottom: "2%"
                }}
                className="desFont medFont"
            >
                Our rates depend on what level the source language is at,
                ranging from standard to business language, but most of our work
                is for sworn or certified NAATI translation requests.
                <br />
                <br />
                Compared to other translation agencies out there, our rates are
                more than competitive- we at LINGGO Translation beat our
                competition (who claim to offer the quality we do) by more than
                25%. <br />
                We are able to do this because we choose to: we love what we do,
                and importantly for you, there are no project managers in the
                way of getting what you want.
                <br />
                <br />
                You pay for OUR service- we deliver our exceptional quality and
                service without the back-and-forth, wait times and compromises
                that you will come to expect from agencies who outsource their
                translation tasks for below-award rates.
                <br />
                <br />
                Please take a look at our Staff profile page for a look at our
                team on paper, check out our pricing, and then submit your
                document. You are more than welcome to contact us if you would
                like to work together to achieve larger scale language goals, or
                if you have specific requests. Once we receive your translation
                task we X, and let our in-house translations take care of the
                marketing goals or global reach that you have set for yourself
                or your company.
            </p>
        </div>
    );
}
