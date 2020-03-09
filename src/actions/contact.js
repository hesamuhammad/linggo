import axios from "axios";

export const SET_CONTACT = "SET_CONTACT";

export const setContact = data => {
    return {
        type: SET_CONTACT,
        payload: data
    };
};

export const postContact = values => dispatch => {
    return axios
        .post("https://project-linggo.herokuapp.com/contact/add", values)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
};

import axios from 'axios';