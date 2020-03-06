import axios from "axios";

const token = localStorage.getItem("token");
export const SET_PROJECT = "SET_PROJECT";
export const SET_PROJECT_BY_ID = "SET_PROJECT_BY_ID";
export const SET_PROFILE_BY_ID_USERS = "SET_PROFILE_BY_ID_USERS";
export const SET_DELETE_PROJECT = "SET_DELETE_PROJECT";

const API = process.env.REACT_APP_API_PROJECT;
// const API = "http://localhost:3007/";

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
        url: `${API}project/getall`,
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
        url: `${API}project/getone/${id}`,
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
        url: `${API}project/getbyusers/${id}`,
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
        .delete(`${API}project/delete/${id}`, {
            headers: { authorization: `Bearer ${token}` }
        })
        .then(res => {
            dispatch(getByIdUsers());
            window.location.reload();
        }, 5000);
};

export const startProject = id => dispatch => {
    return axios(
        {
            method: "put",
            url: `${API}project/start/${id}`,
            headers: { authorization: `Bearer ${token}` }
        },
        3000
    )
        .then(result => {
            dispatch(setProjectById());
            window.location.reload();
        }, 3000)
        .catch(error => {
            console.log(error);
        });
};

export const inputProject = (data, history) => dispatch => {
    return axios.post(`${API}project/addlocal`, data).then(res => {
        if (res.status === 200) {
            window.location.reload();
        }
    });
};
