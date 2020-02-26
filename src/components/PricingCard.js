import React from "react";
import { Card, Col, Row } from "antd";
import "../App.css";

export default function PricingCard() {
  return (
    <div>
      <div style={{ margin: "auto", textAlign: "center"}}>
        <Row justify="space-around" gutter={16} style={{ margin: "auto" }}>
          <Col span={8}>
            <Card hoverable bordered={false} style={{ minHeight: "290px", maxHeight: "500px" }}>
              <h3 className="medFont titleFont" style={{ paddingBottom: "12px" }}>
                General
              </h3>
              <hr style={{ opacity: "30%" }} />
              <h3>$ 0.11<h5>per word</h5></h3>
              <hr style={{ opacity: "30%" }} />
              <p className="smallFont desFont">
                Good for internal use:
                <br />
                Social Media Post
                <br />
                User Generated Content
                <br />
                Articles
                <br />
                Letters
                <br />
                Brochures
                <br />
                CVs
                <br />
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable bordered={false} style={{ minHeight: "290px", maxHeight: "500px" }}>
              <h3 className="medFont titleFont" style={{ paddingBottom: "12px" }}>
                Specialized
              </h3>
              <hr style={{ opacity: "30%" }} />
              <h3>$ 0.14<h5>per word</h5></h3>
              <p className="smallFont desFont">
                <hr style={{ opacity: "30%" }} />
                Best for professional content:
                <br />
                Training manuals
                <br />
                Clinical trials
                <br />
                RFPs
                <br />
                User Interface & string
                <br />
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable bordered={false} style={{ minHeight: "290px", maxHeight: "500px" }}>
              <h3 className="medFont titleFont" style={{ paddingBottom: "12px" }}>
                NAATI Certified
              </h3>
              <hr style={{ opacity: "30%" }} />
              <h3>$ 0.17<h5>per word</h5></h3>
              <hr style={{ opacity: "30%" }} />
              <p className="smallFont desFont">
                For your legal and immigration translation needs.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
