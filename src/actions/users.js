import axios from "axios";
import history from "../history";
import jwt from "jwt-decode";
import Swal from "sweetalert2";

export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";
export const GET_BY_ID = "GET_BY_ID";
// const heroku = process.env.REACT_APP_API;

// import history from

export const loggedIn = data => {
    return {
        type: LOGGED_IN,
        payload: data
    };
};

export const loggedOut = () => {
    return {
        type: LOGGED_OUT
    };
};

export const myData = data => {
    return {
        type: GET_BY_ID,
        payload: data
    };
};

export const checkUsers = data => dispatch => {
    return axios
        .post(`https://project-linggo.herokuapp.com/users/login`, data)
        .then(res => {
            if (res.data !== "gagal") {
                localStorage.setItem("token", res.data.token);
                dispatch(loggedIn(data));
                Swal.fire({
                    title: "Login Success !",
                    position: "center",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                });
                history.push("/profile");
            } else {
                Swal.fire({
                    title: "Email or Password is wrong !",
                    position: "center",
                    icon: "error"
                });
            }
        })
        .then(res => {
            history.push("/profile");
        });
};

export const register = data => {
    return axios
        .post("https://project-linggo.herokuapp.com/users/register", data)
        .then(res => {
            Swal.fire({
                title: "Registration Success !",
                position: "center",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });
            history.push("/signin");
        });
};

export const getData = () => async dispatch => {
    const token = localStorage.getItem("token");
    let decode = "";
    if (token) {
        decode = jwt(token);
    }

    return await axios
        .get(`https://project-linggo.herokuapp.com/users/${decode._id}`, {
            headers: { authorization: `Bearer ${token}` }
        })
        .then(res => {
            dispatch(myData(res.data.data));
        })
        .catch(err => {
            console.log(err);
        });
};
