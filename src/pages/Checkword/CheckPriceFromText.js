import React, { useState, useEffect } from "react";
import { Container, Form, Col, Button, Modal, Alert } from "react-bootstrap";

import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { wordCount } from "../../actions/wordcount";

function CheckPriceFromText(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [resultCount, setResultCount] = useState({
    jumlahKata: "",
    hargaTotal: ""
  });

  useEffect(() => {
    if (localStorage.getItem("wordcount") !== null) {
      const getData = JSON.parse(localStorage.getItem("wordcount"));

      let allData = {
        harga: getData.hargaTotal,
        jumlahKata: getData.jumlahKata
      };
      setResultCount(allData);

      const timer = setTimeout(() => {
        localStorage.removeItem("wordcount");
        localStorage.removeItem("textWord");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const mystyle = {
    boxCount: {
      padding: "30px",
      background: "white",
      margin: "50px 0px",
      border: "1px solid #e6e6e6"
    },
    h2: { color: "#595959", margin: "0 0 15px", fontWeight: "700" },
    btnCekWord: {
      backgroundColor: "#3072ac",
      borderColor: "#2e6da4",
      padding: "20px",
      fontSize: "17px",
      marginBottom: "20px",
      width: "100%"
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Col md={10} sm={10} xs={12}>
        <div style={mystyle.boxCount}>
          <h2 style={mystyle.h2}>UPLOAD MATERIAL</h2>

          <Button style={mystyle.btnCekWord} href="/project">
            Add File
          </Button>
          <Button style={mystyle.btnCekWord} onClick={handleShow}>
            Type Text
          </Button>

          {localStorage.getItem("wordcount") !== null ? (
            <Alert variant="dark">
              word count : {resultCount.jumlahKata}
              <br />
              Price : Rp. {resultCount.harga}
            </Alert>
          ) : (
            <div></div>
          )}
        </div>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Formik
          initialValues={{
            textProject: ""
          }}
          validate={values => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            setShow(false);
            props.wordCount(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
          }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Enter Free Text</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="textProject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // value={inputWord}
                    value={values.textProject}
                    style={{ height: "80px", width: "100%" }}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Apply
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  console.log("wordCount(data)", wordCount);
  return {
    wordCount: data => dispatch(wordCount(data))
  };
};

export default withRouter(
  connect(null, mapDispatchToProps)(CheckPriceFromText)
);
