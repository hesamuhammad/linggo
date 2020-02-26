import axios from "axios";

// export const SET_LOGIN = "SET_LOGIN";

// export const isLogin = () => dispatch => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         dispatch(
//             setLogin({
//                 isLogin: true
//             })
//         );
//     } else {
//         dispatch(setLogin())
//     }
// }

// export const setLogin = data => {
//     return {
//         type: SET_LOGIN,
//         payload: data
//     }
// }

const token = localStorage.getItem("token");
export const SET_PROFILE = "SET_PROFILE";
export const SET_PROFILE_BY_ID = "SET_PROFILE_BY_ID";
export const SET_PROFILE_BY_EMAIL = "SET_PROFILE_BY_EMAIL";

export const setProfile = data => {
  return {
    type: SET_PROFILE,
    payload: data
  };
};

export const setProfileById = data => {
  return {
    type: SET_PROFILE_BY_ID,
    payload: data
  };
};

export const getProfile = () => dispatch => {
  return axios({
    method: "GET",
    url: `http://localhost:3002/users`,
    headers: { authorization: `Bearer ${token}` }
  })
    .then(result => {
      dispatch(setProfile(result.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const getProfileById = id => dispatch => {
  return axios({
    method: "GET",
    url: `https://project-linggo.herokuapp.com/getone/${id}`,
    headers: { authorization: `Bearer ${token}` }
  })
    .then(result => {
      dispatch(setProfileById(result.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateProfile = (id, values) => dispatch => {
  return axios({
    method: "PUT",
    url: `https://project-linggo.herokuapp.com/update/${id}`,
    headers: { authorization: `Bearer ${token}`, data: values }
  }).then(response => {
    console.log("respon masuk")
  });
};
