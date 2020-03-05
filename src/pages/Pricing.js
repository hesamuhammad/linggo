import React from "react";
import PricingDetail from "../components/PricingDetail";
import PricingCard from "../components/PricingCard";
import { Row, Col } from "antd";
import BreadPricing from "../components/BreadPricing";
import CountPriceByNumber from "../components/CountPriceByNumber"
import CountPriceByText from "../components/CountPriceByText"

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
            <Col
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                >
                <CountPriceByNumber/>
                </Col>
            </Row>
            {/* <Row>
            <Col
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                >
                <CountPriceByText/>
                </Col>
            </Row> */}
            <Row>
                <PricingCard />
            </Row>
        </div>
    );
}
