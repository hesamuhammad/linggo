import React from "react";
import Gmap from "../components/Gmap";
import FormContact from "../components/FormContact";
import BreadContact from "../components/BreadContact";
import { Row, Col } from "react-bootstrap";

export default function ContactUs() {
    return (
        <div>
            <BreadContact />
            <Row gutter={[8, 8]} style={{marginLeft: "0", marginRight: "0"}}>
                <Col 
                    xs={{span:24}} 
                    sm={{span:24}} 
                    md={{span:8}} 
                    lg={{span:8}} 
                    xl={{span:8}}
                >
                    <Gmap />
                </Col>
                <Col 
                    xs={{span:24}} 
                    sm={{span:24}} 
                    md={{span:4}} 
                    lg={{span:4}} 
                    xl={{span:4}}
                >
                    <FormContact />
                </Col>
            </Row>
        </div>
    );
}
