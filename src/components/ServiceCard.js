import React from "react";
import { HashLink } from "react-router-hash-link";
import { Card, Col, Row } from "antd";
import "../App.css";

export default function DetailPricing() {

  return (
    <div style={{ textAlign: "center" }}>
      <Row style={{ backgroundColor: "#f5f5f5" }}>
        <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
        <Col xs={22} sm={20} md={16} lg={16} xl={16}>
          <Row
            align="middle"
            justify="space-around"
            gutter={[16, 16]}
            style={{ margin: "0 auto", padding: "10px" }}
          >
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
            >
              <HashLink className="hashHover" to="/service#service1" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}
              >
                <Card hoverable bordered={false} style={{ height: "200px" }}>
                  <h3 className="smallFont titleFont">General Translation</h3>
                  <hr style={{ opacity: "70%" }} />
                  <p className="smallFont desFont">
                    We have over 25,000 certified translation professionals
                    working in more than 120 languages to handle any project you
                    have.
                  </p>
                </Card>
              </HashLink>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
            >
              <HashLink className="hashHover" to="/service#service2"
              scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}
              >
                <Card hoverable bordered={false} style={{ height: "200px" }}>
                  <h3 className="smallFont titleFont">
                    Localization & Transcreation
                  </h3>
                  <hr style={{ opacity: "70%" }} />
                  <p className="smallFont desFont">
                    It for those clients who want to add English language to
                    their business/corporate w but are not excited by the idea
                    of a literal translation.
                  </p>
                </Card>
              </HashLink>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
            >
              <HashLink className="hashHover" to="/service#service3" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}>
                <Card hoverable bordered={false} style={{ height: "200px" }}>
                  <h3 className="smallFont titleFont">
                    Subtitling & Transtitling
                  </h3>
                  <hr style={{ opacity: "70%" }} />
                  <p className="smallFont desFont">
                    Movies
                    <br />
                    TV Shows
                    <br />
                    Conferences
                    <br />
                    Documentaries
                    <br />
                    Research
                    <br />
                    Interviews
                  </p>
                </Card>
              </HashLink>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
            >
              <HashLink className="hashHover" to="/service#service4" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}>
                <Card hoverable bordered={false} style={{ height: "200px" }}>
                  <h3 className="smallFont titleFont">
                    NAATI Certified & Sworn Translations
                  </h3>
                  <hr style={{ opacity: "70%" }} />
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
              </HashLink>
            </Col>
          </Row>
        </Col>
        <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
      </Row>
    </div>
  );
}
