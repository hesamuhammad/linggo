import axios from "axios";

const token = localStorage.getItem("token");
export const SET_PROJECT = "SET_PROJECT";
export const SET_PROJECT_BY_ID = "SET_PROJECT_BY_ID";
export const SET_PROFILE_BY_ID_USERS = "SET_PROFILE_BY_ID_USERS";
export const SET_DELETE_PROJECT = "SET_DELETE_PROJECT";

export const setProject = data => {
  return {
    type: SET_PROJECT,
    payload: data
  };
};

export const setProjectById = data => {
  return {
    type: SET_PROJECT_BY_ID,
    payload: data
  };
};

export const getProject = () => dispatch => {
  return axios({
    method: "GET",
    url: `https://project-linggo.herokuapp.com/project/getall`,
    headers: { authorization: `Bearer ${token}` }
  })
    .then(result => {
      dispatch(setProject(result.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const getProjectById = id => dispatch => {
  return axios({
    method: "GET",
    url: `https://project-linggo.herokuapp.com/project/getone/${id}`,
    headers: { authorization: `Bearer ${token}` }
  })
    .then(result => {
      dispatch(setProjectById(result.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const setProfileByIdUsers = data => {
  return {
    type: SET_PROFILE_BY_ID_USERS,
    payload: data
  };
};

export const getByIdUsers = id => dispatch => {
  return axios({
    method: "GET",
    url: `http://localhost:3007/project/getbyusers/${id}`,
    headers: { authorization: `Bearer ${token}` }
  })
    .then(result => {
      // console.log("actions getByIdUsers result", result.data);
      dispatch(setProfileByIdUsers(result.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const setDeleteProject = data => {
  return {
    type: SET_DELETE_PROJECT,
    payload: data
  };
};
export const deleteByid = id => dispatch => {
  return axios
    .delete(`http://localhost:3007/project/delete/${id}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      dispatch(getByIdUsers());
    });
};
export const startProject = id => dispatch => {
  return axios
    .put(`http://localhost:3007/project/start/${id}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(res => {
      dispatch(getByIdUsers());
    });
};
