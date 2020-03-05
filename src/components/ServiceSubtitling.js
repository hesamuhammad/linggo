import React from "react";
import "../App.css";

export default function ServiceSubtitling() {
    return (
        <div>
            <h3
                className="bigFont titleFont"
                style={{
                    paddingBottom: "12px",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: "2.5vh"
                }}
            >
                Subtitling & Transtitling
            </h3>
            <p
                className="desFont"
                style={{ fontSize: "2vh", maxWidth: "300px" }}
            >
                Transtitling TM (steal info from other sites) <br />
                Subtitling (steal info from other sites) <br />
                Movies, TV Shows, Conferences, Documentaries, Research
                Interviews
                <p className="desFont" style={{ fontSize: "2vh" }}></p>
            </p>
        </div>
    );
}
