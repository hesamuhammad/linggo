import React from "react";
import Gmap from "../components/Gmap";
import FormContact from "../components/FormContact";
import BreadContact from "../components/BreadContact";
import { Row, Col } from "react-bootstrap";

export default function ContactUs() {
    return (
        <div>
            <BreadContact />
            <Row>
                <Col xs={12} md={7}>
                    <Gmap />
                </Col>
                <Col xs={12} md={5}>
                    <FormContact />
                </Col>
            </Row>
        </div>
    );
}
