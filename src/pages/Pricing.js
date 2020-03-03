import React from "react";
import PricingDetail from "../components/PricingDetail";
import PricingCard from "../components/PricingCard";
import { Row, Col } from "antd";
import BreadPricing from "../components/BreadPricing";

export default function Pricing() {
    return (
        <div>
            <BreadPricing />
            <Row style={{ padding: "1%" }}>
                <Col xs={0} sm={2} md={5} lg={5} xl={5}></Col>
                <Col xs={24} sm={20} md={14} lg={14} xl={14}>
                    <PricingDetail />
                </Col>
                <Col xs={0} sm={2} md={5} lg={5} xl={5}></Col>
            </Row>

            <Row>
                <PricingCard />
            </Row>
        </div>
    );
}
