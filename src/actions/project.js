
import axios from "axios";

const token = localStorage.getItem("token");
export const SET_PROJECT = "SET_PROJECT";
export const SET_PROJECT_BY_ID = "SET_PROJECT_BY_ID";

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
