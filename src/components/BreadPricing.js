import React from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col } from 'antd';

export default function BreadPricing() {
    return (
        <div>
            <Row>
                <Col className="BreadHeader">
                    <p>PRICING</p>
                    <Breadcrumb style={{ 
                        fontSize: "11px",
                        lineHeight: "19px",
                        textAlign: "center",
                        textTransform: "uppercase",
                        letterSpacing: "1.8px",
                        fontWeight: "700"
                    }}>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/">Pricing</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </div>
    )
}