import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getProfileById,
  getByIdUsers,
  deleteByid,
  startProject
} from "../actions";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "./project.css";

function MyProfile(props) {
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
        props.startProject(params);
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
    console.log("startProject", params);
  };

  console.log("propsssssss", props);
  // console.log("propsssssss", props.data);

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
                                    <Button
                                      variant="primary"
                                      onClick={() => startProject(item._id)}
                                    >
                                      Start Project
                                    </Button>{" "}
                                    <Button
                                      variant="danger"
                                      onClick={() => deleteProject(item._id)}
                                    >
                                      Delete
                                    </Button>
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
    startProject: id => dispatch(startProject(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MyProfile)
);
