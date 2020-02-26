import React from "react";
import "../App.css";
import Service1 from "../assets/images/service1.jpg";
import Service2 from "../assets/images/service2.jpg";
import Service3 from "../assets/images/service3.jpg";
import Service4 from "../assets/images/service4.jpg";

export default function ServiceLocalization() {
  return (
    <div>
      <h3 className="medFont" style={{ paddingBottom: "12px", textAlign: "center" }}>
        Localization & Transcreation
      </h3>
      <hr style={{ opacity: "30%" }} />
      <hr style={{ opacity: "30%" }} />
      <p className="smallFont desFont">
        Transcreation is a X of ‘translation’ and ‘creation’. It for those
        clients who want to add English language to their business/corporate w
        but are not excited by the idea of a literal translation. For example,
        you want to inject a bit of creativitiy and life into your content as a
        result of a new direction of the company or a change in company culture
        – CRNST transcreation is for you.
        <br />
        Localization is the standard etc. (steal from other sites)
        <br />
        Marketing material
        <br />
        Website foreign language implementation / overhaul
        <br />
        Gaming & Digital Books
      </p>
    </div>
  );
}
