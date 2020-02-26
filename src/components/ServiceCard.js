import React from "react";
import { Card, Col, Row } from "antd";
import "../App.css";

export default function DetailPricing() {
  return (
    <div style={{ background: "#ECECEC", padding: "15px 0" }}>
      <div style={{ margin: "auto", textAlign: "center", width: "70%" }}>
        <Row
          justify="space-around"
          gutter={[16, 16]}
          style={{ margin: "auto", padding: "10px" }}
        >
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <Card hoverable style={{ height: "200px" }}>
              <h3 className="smallFont">
                General Translation
              </h3>
              <hr style={{ opacity: "30%" }} />
              <p className="smallFont desFont"></p>
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <Card hoverable bordered={false} style={{ height: "200px" }}>
              <h3 className="smallFont">
                Localization & Transcreation
              </h3>
              <hr style={{ opacity: "30%" }} />
              <p className="smallFont desFont">
                It for those clients who want to add English language to their
                business/corporate w but are not excited by the idea of a
                literal translation.
              </p>
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <Card hoverable bordered={false} style={{ height: "200px" }}>
              <h3 className="smallFont">
                Subtitling & Transtitling
              </h3>
              <hr style={{ opacity: "30%" }} />
              <p className="smallFont">
                Movies, TV Shows, Conferences, Documentaries, Research
                Interviews
              </p>
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
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
      </div>
    </div>
  );
}
