import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProjectById } from "../actions";
import Progress from './Progress';

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
              <Progress/>
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
