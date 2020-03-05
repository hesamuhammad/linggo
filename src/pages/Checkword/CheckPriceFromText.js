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

  useEffect(() => {
    // const wordcount = JSON.parse(localStorage.getItem("wordcount"));
    // props.wordCount(wordcount);
    // console.log("wordcount", wordcount);

    const timer = setTimeout(() => {
      localStorage.removeItem("wordcount");
      localStorage.removeItem("textWord");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const getTextWord = () => {
    const textWord = JSON.parse(localStorage.getItem("textWord"));
    return textWord.textProject;
  };

  const harga = option => {
    const wordcount = JSON.parse(localStorage.getItem("wordcount"));

    let harga = wordcount.hargaTotal;
    let jumlahKata = wordcount.jumlahKata;
    // return harga.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    // return wordcount.jumlahKata;

    if (option === "kata") {
    } else if (option === "harga") {
    } else {
      return "";
    }
  };

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

  const cekLogin = () => {
    if (props.users.isLogin === true) {
      console.log("login");
    } else {
      console.log("belum login");
    }
  };

  const timer = setTimeout(() => {
    localStorage.removeItem("wordcount");
    localStorage.removeItem("textWord");
  }, 3000);

  console.log("props", props);
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

          <Button style={mystyle.btnCekWord}>Add File</Button>
          <Button style={mystyle.btnCekWord} onClick={handleShow}>
            Type Text
          </Button>

          {localStorage.getItem("wordcount") !== null ? (
            <Alert variant="dark">
              word count : {harga("jumlahKata")}
              <br />
              Price : Rp. {harga("harga")}
            </Alert>
          ) : (
            <div></div>
          )}
        </div>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Formik
          initialValues={{
            textProject: "vddddd dddddd ddddd ddddddddddd dddddd"
          }}
          validate={values => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            setShow(false);

            localStorage.setItem("textWord", JSON.stringify(values));

            const wordcount = JSON.parse(localStorage.getItem("wordcount"));
            console.log("harga", wordcount);

            // let harga = wordcount.hargaTotal;
            // let jumlahKata = wordcount.jumlahKata;

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
  console.log("wordCount", wordCount);
  console.log("dispatch", dispatch);
  return {
    wordCount: data => dispatch(wordCount(data))
  };
};

export default withRouter(
  connect(null, mapDispatchToProps)(CheckPriceFromText)
);
