import React from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col } from 'antd';

export default function BreadContact() {
    return (
        <div>
            <Row>
                <Col className="BreadHeader">
                    <p>CONTACT US</p>
                    <Breadcrumb style={{ 
                        fontSize: "11px",
                        lineHeight: "19px",
                        textAlign: "center",
                        textTransform: "uppercase",
                        letterSpacing: "1.8px",
                        fontWeight: "700"
                    }}>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </div>
    )
}