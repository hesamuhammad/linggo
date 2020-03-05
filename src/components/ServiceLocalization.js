import React from "react";
import "../App.css";

export default function ServiceLocalization() {
    return (
        <div>
            <h3
                className="bigFont titleFont"
                style={{
                    paddingBottom: "12px",
                    textAlign: "right",
                    fontWeight: "bold",
                    fontSize: "2.5vh"
                }}
            >
                Localization & Transcreation
            </h3>
            <p
                className="desFont"
                style={{ fontSize: "2vh", textAlign: "right" }}
            >
                Transcreation is a X of ‘translation’ and ‘creation’. It for
                those clients who want to add English language to their
                business/corporate w but are not excited by the idea of a
                literal translation. For example, you want to inject a bit of
                creativitiy and life into your content as a result of a new
                direction of the company or a change in company culture – LINGGO
                transcreation is for you.
                {/* <br />
                Localization is the standard etc. (steal from other sites)
                <br />
                Marketing material
                <br />
                Website foreign language implementation / overhaul
                <br />
                Gaming & Digital Books */}
            </p>
        </div>
    );
}
