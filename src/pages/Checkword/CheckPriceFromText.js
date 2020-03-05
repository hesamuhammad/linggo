import React, { useState } from "react";
import { Container, Form, Col, Button, Modal } from "react-bootstrap";

function CheckPriceFromText(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShows = () => setShow(true);

    const mystyle = {
        boxCount: {
            padding: "30px",
            background: "white",
            margin: "50px 0px",
            border: "1px solid #e6e6e6"
        },
        h2: { color: "#595959", margin: "0 0 15px", fontWeight: "700" }
    };

    const cekLogin = () => {
        if (props.users.isLogin === true) {
            console.log("login");
        } else {
            console.log("belum login");
        }
    };

    console.log("props", props.users);
    return (
        <Container
            style={{
                display: "flex",
                justifyContent: "center",
                background: "#ececec"
            }}
        >
            <Col md={10} sm={10} xs={12}>
                <div style={mystyle.boxCount}>
                    <h2 style={mystyle.h2}>UPLOAD MATERIAL</h2>

                    <Button variant="primary">Add File</Button>
                    <Button variant="primary" onClick={handleShow}>
                        Type Text
                    </Button>
                </div>
            </Col>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Free Text</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={mystyle.form}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Apply
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default CheckPriceFromText;
