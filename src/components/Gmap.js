import React from "react";

export default function Gmap() {
    return (
        <div
            style={{
                paddingLeft: "6%",
                paddingRight: "6%",
                paddingBottom: "3%",
                paddingTop: "3%"
            }}
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10286.645922248701!2d106.80908411320921!3d-6.257922323545558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17f3a4d6d8b%3A0x1392b5623d84313b!2sImpact%20Byte%20Jakarta!5e0!3m2!1sen!2sid!4v1582367987135!5m2!1sen!2sid"
                title="gmap"
                style={{
                    border: "0",
                    allowfullscreen: "",
                    width: "100%",
                    height: "500px",
                    frameborder: "0"
                }}
            />
        </div>
    );
}
