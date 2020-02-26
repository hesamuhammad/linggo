import React from 'react'
import "../App.css";
import Service1 from "../assets/images/service1.jpg";
import Service2 from "../assets/images/service2.jpg";
import Service3 from "../assets/images/service3.jpg";
import Service4 from "../assets/images/service4.jpg";

export default function ServiceSubtitling() {
    return (
        <div>
            <h3 className="medFont" style={{ paddingBottom: "12px", textAlign: "center" }}>
                Subtitling & Transtitling
              </h3>
              <hr style={{ opacity: "30%" }} />
              <hr style={{ opacity: "30%" }} />
              <p className="smallFont">
                Transtitling TM (steal info from other sites) <br />
                Subtitling (steal info from other sites) <br />
                Movies, TV Shows, Conferences, Documentaries, Research
                Interviews
              </p>
        </div>
    )
}
