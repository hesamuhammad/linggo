import React from "react";
import Gmap from "../components/Gmap";
import FormContact from "../components/FormContact";
import BreadContact from "../components/BreadContact";
import { Row, Col } from "antd";

export default function ContactUs() {
    return (
        <div>
            <BreadContact />
                <Row>
                    <Col xs={0} sm={2} md={4} lg={4} xl={2}></Col>
                    <Col xs={24} sm={20} md={16} lg={20} xl={20}>
                        <Gmap />
                    </Col>
                    <Col xs={0} sm={2} md={4} lg={4} xl={2}></Col>
                </Row>
                <Row>
                    <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
                    <Col xs={24} sm={20} md={16} lg={16} xl={16}>
                        <FormContact />
                    </Col>
                    <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
                </Row>
        </div>
    );
}
