import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProjectById } from "../actions";
import { Steps } from "antd";


const { Step } = Steps;

function UsersProject(props) {
  useEffect(() => {
    props.getProjectById();
  }, []);

  return (
    <div>
      {props.project !== undefined &&
        props.project.map((item, key) => {
          console.log(item);
          return (
            <div>
              {item.fileProjectName}
              {item.fileProjectType}
              <Steps size="small" current={item.progress}>
                <Step title="Verification" />
                <Step title="Pay" />
                <Step title="In Progress" />
                <Step title="Done" />
              </Steps>
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    project: state.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProjectById: () => {
      dispatch(getProjectById());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersProject);
