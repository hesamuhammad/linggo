import React, { useEffect, Fragment, useState } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getProfileById,
  getByIdUsers,
  deleteByid,
  startProject,
  inputProject
} from "../actions";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { Formik } from "formik";
import "./project.css";

function MyProfile(props) {
  const [show, setShow] = useState(false);
  const [uplodFile, setUplodFile] = useState("");
  const [idUsers, setIdUsers] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);

    setIdUsers(localStorage.getItem("idusers"));
  };
  const {
    match: {
      params: { id }
    }
  } = props;

  useEffect(() => {
    props.getProfileById(id);
    props.getByIdUsers(id);
  }, []);

  const formatDate = date => {
    let getTgl = date.split("T");
    let tglIndo = getTgl[0].split("-");
    return `${tglIndo[2]} - ${tglIndo[1]} - ${tglIndo[0]}`;
  };

  const deleteProject = params => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        props.deleteByid(params);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const startProject = params => {
    Swal.fire({
      title: "Are you sure want to start this project!",
      text: "once started the project can not be canceled",
      showCancelButton: true,
      confirmButtonColor: "#0062cc",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Start it!"
    }).then(result => {
      if (result.value) {
        props.startProject(params);
        Swal.fire("Your Project has started.");
      }
    });
  };

  const handleFile = event => {
    setUplodFile(event.target.files[0].name);
  };

  console.log("propsssssss", props);

  return (
    <div className="paddingPage">
      {props.profile !== undefined &&
        props.profile.map((item, key) => {
          return (
            <Row style={{ padding: "10px" }}>
              <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 16, offset: 4 }}
                lg={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <div>
                  <Row justify="center">
                    <Col span={5} offset={1}>
                      <p>
                        First Name <br />
                        Last Name <br />
                        Email
                      </p>
                    </Col>
                    <Col span={10}>
                      <p>
                        : {item.firstName}
                        <br />: {item.lastName}
                        <br />: {item.email}
                      </p>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col span={24} className="project-table">
                      <Button variant="primary" onClick={handleShow}>
                        Add Project
                      </Button>

                      <table>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>File Name</th>
                            <th>File Size</th>
                            <th>Total Word</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th style={{ minWidth: "107px" }}>Date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {props.project !== undefined &&
                            props.project.map((item, key) => {
                              return (
                                <tr key={key}>
                                  <td>{key + 1}</td>
                                  <td>{item.fileProjectName}</td>
                                  <td>
                                    {(item.fileProjectSize / 1048576).toFixed(
                                      2
                                    )}{" "}
                                    MB
                                  </td>
                                  <td>Total Word</td>
                                  <td>Price</td>
                                  <td>{item.status}</td>
                                  <td>{formatDate(item.dateStart)}</td>
                                  <td>
                                    {item.status === "New" ? (
                                      <Fragment>
                                        <Button
                                          variant="primary"
                                          onClick={() => startProject(item._id)}
                                        >
                                          Start Project
                                        </Button>{" "}
                                        <Button
                                          variant="danger"
                                          onClick={() =>
                                            deleteProject(item._id)
                                          }
                                        >
                                          Delete
                                        </Button>
                                      </Fragment>
                                    ) : (
                                      <div></div>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          );
        })}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{
            fileProject: "",
            idUsers: idUsers
          }}
          validate={values => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            let formData = new FormData();

            for (const key in values) {
              if (values.hasOwnProperty(key)) {
                formData.append(key, values[key]);
              }
            }
            props.inputProject(formData);
            handleClose();
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
              <Modal.Body>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Uplod File PDF</Form.Label>
                  <br />
                  <input
                    type="file"
                    name="fileProject"
                    onChange={event => {
                      setFieldValue(
                        "fileProject",
                        event.currentTarget.files[0]
                      );
                      setFieldValue(
                        "fileProjectName",
                        event.currentTarget.files[0].name
                      );
                      setFieldValue(
                        "fileProjectType",
                        event.currentTarget.files[0].type
                      );
                      setFieldValue(
                        "fileProjectSize",
                        event.currentTarget.files[0].size
                      );
                      console.log(event);
                      handleFile(event);
                    }}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Save Project
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    project: state.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileById: id => {
      dispatch(getProfileById(id));
    },
    getByIdUsers: id => {
      dispatch(getByIdUsers(id));
    },
    deleteByid: id => dispatch(deleteByid(id)),
    startProject: id => dispatch(startProject(id)),
    inputProject: data => dispatch(inputProject(data))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MyProfile)
);
