import React from "react";
import { Card, Col, Row, Divider } from "antd";
import "../App.css";

export default function PricingCard() {
  return (
    <div>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Row justify="space-around" gutter={[16, 16]}>
          <Col xs={{span: 20, offset: 2}} sm={{span: 8, offset: 0}} md={{span: 8, offset: 0}} lg={{span: 8, offset: 0}}>
            <Card hoverable bordered={false} style={{ height: "330px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "2.5vh"
                }}
              >
                General
              </p>
              <Divider />
              {/* <hr style={{ opacity: "30%" }} /> */}
              <h3 className="medFont titleFont">
                $ 0.11
                <br />
                per word
              </h3>
              <hr style={{ opacity: "30%" }} />
              <p className="medFont desFont">
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
          <Col xs={{span: 20, offset: 2}} sm={{span: 8, offset: 0}} md={{span: 8, offset: 0}} lg={{span: 8, offset: 0}}>
            <Card hoverable bordered={false} style={{ height: "330px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "2.5vh"
                }}
              >
                Specialized
              </p>
              <Divider />
              <h3 className="medFont titleFont">
                $ 0.14
                <br />
                per word
              </h3>
              <p className="medFont desFont">
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
          <Col xs={{span: 20, offset: 2}} sm={{span: 8, offset: 0}} md={{span: 8, offset: 0}} lg={{span: 8, offset: 0}}>
            <Card hoverable bordered={false} style={{ height: "330px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "2.5vh"
                }}
              >
                NAATI Certified
              </p>
              <Divider />
              <h3 className="medFont titleFont">
                $ 0.17
                <br />
                per word
              </h3>
              <hr style={{ opacity: "30%" }} />
              <p className="medFont desFont">
                For your legal and immigration translation needs.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
