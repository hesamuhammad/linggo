import React from "react";
import "../App.css";
import Service1 from "../assets/images/service1.jpg";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ServiceGeneral() {
  return (
    <div>
      <h3
        className="medFont"
        style={{ paddingBottom: "12px", textAlign: "center" }}
      >
        General Translation
      </h3>
      <p className="smallFont desFont">
        Whether it’s a few paragraphs that need to be translated from one
        language to another, or a website and marketing plan that needs a
        complex localization treatment, we have the experience, the staff, and
        the resources to get the job done fast, within your budget, and – most
        importantly - accurately. We have over 25,000 certified translation
        professionals working in more than 120 languages to handle any project
        you have.
      </p>
    </div>
  );
}
