import React from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col } from 'antd';

export default function BreadServices() {
    return (
        <div>
            <Row>
                <Col className="BreadHeader">
                    <p>SERVICES</p>
                    <Breadcrumb style={{ 
                        fontSize: "11px",
                        lineHeight: "19px",
                        textAlign: "center",
                        textTransform: "uppercase",
                        letterSpacing: "1.8px",
                        fontWeight: "700"
                    }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/">Services</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </div>
    )
}