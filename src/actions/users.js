import axios from "axios";

export const SET_LOGIN = "SET_LOGIN";

// const heroku = process.env.REACT_APP_LOGIN;

export const isLogin = () => dispatch => {
    const token = localStorage.getItem("token");

    if (token) {
        dispatch(setLogin({ isLogin: true }));
    } else {
        dispatch(setLogin());
    }
};

export const setLogin = data => {
    return {
        type: SET_LOGIN,
        payload: data
    };
};

export const login = (values, history) => dispatch => {
    return axios({
        method: "POST",
        url: ``,
        data: values
    }).then(response => {
        if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            dispatch(isLogin());
            history.push("/userlogin");
        }
    });
};

export const register = (values, history) => dispatch => {
    return axios({
        method: "POST",
        url: ``,
        data: values
    }).then(response => {
        if (response.status === 200) {
            alert("Registration Succeded");
            history.push("/signin");
        }
    });
};
