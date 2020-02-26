import React from "react";
import { Card, Col, Row } from "antd";
import "../App.css";

export default function DetailPricing() {
  return (
    <div style={{textAlign: "center"}}>
      <Row style={{ backgroundColor: "#f5f5f5" }}>
        <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
        <Col xs={22} sm={20} md={16} lg={16} xl={16}>
          <Row
            align="middle"
            justify="space-around"
            gutter={[16, 16]}
            style={{ margin: "0 auto", padding: "10px" }}
          >
            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }}>
              <Card hoverable bordered={false} style={{ height: "200px" }}>
                <h3 className="smallFont">General Translation</h3>
                <hr style={{ opacity: "30%" }} />
                <p className="smallFont desFont"></p>
              </Card>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }}>
              <Card hoverable bordered={false} style={{ height: "200px" }}>
                <h3 className="smallFont">Localization & Transcreation</h3>
                <hr style={{ opacity: "30%" }} />
                <p className="smallFont desFont">
                  It for those clients who want to add English language to their
                  business/corporate w but are not excited by the idea of a
                  literal translation.
                </p>
              </Card>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }}>
              <Card hoverable bordered={false} style={{ height: "200px" }}>
                <h3 className="smallFont">Subtitling & Transtitling</h3>
                <hr style={{ opacity: "30%" }} />
                <p className="smallFont desFont">
                  Movies, TV Shows, Conferences, Documentaries, Research
                  Interviews
                </p>
              </Card>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }}>
              <Card hoverable bordered={false} style={{ height: "200px" }}>
                <h3 className="smallFont">
                  NAATI Certified & Sworn Translations
                </h3>
                <hr style={{ opacity: "30%" }} />
                <p className="smallFont desFont">
                  Identity Documents
                  <br />
                  Educational Transcripts
                  <br />
                  Affidavits & Sworn Testimonies
                  <br />
                  Notarized Deeds
                  <br />
                  Judicial Decisions
                </p>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
      </Row>
    </div>
  );
}
