import React from "react";
import { Card, Col, Row, Divider } from "antd";
import "../App.css";

export default function PricingCard() {
  return (
    <div>
      <div style={{ margin: "auto", textAlign: "center"}}>
        <Row justify="space-around" gutter={16} style={{ margin: "auto" }}>
          <Col span={8}>
            <Card hoverable bordered={false} style={{ height: "290px" }}>
              <h3 className="medFont titleFont">
                General
              </h3>
              <Divider/>
              {/* <hr style={{ opacity: "30%" }} /> */}
              <h3 className="medFont titleFont">$ 0.11<br/>per word</h3>
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
            <Card hoverable bordered={false} style={{ height: "290px" }}>
              <h3 className="medFont titleFont">
                Specialized
              </h3>
              <Divider/>
              <h3 className="medFont titleFont">$ 0.14<br/>per word</h3>
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
            <Card hoverable bordered={false} style={{ height: "290px" }}>
              <h3 className="medFont titleFont">
                NAATI Certified
              </h3>
              <Divider/>
              <h3 className="medFont titleFont">$ 0.17<br/>per word</h3>
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
