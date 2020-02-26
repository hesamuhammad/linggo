
// import axios from "axios";

// const token = localStorage.getItem("token");
// export const SET_BLOGS = "SET_BLOGS";
// export const SET_BLOGS_BY_ID = "SET_BLOGS_BY_ID";
// export const SET_BLOGS_BY_EMAIL = "SET_BLOGS_BY_EMAIL";

// export const setBlogs = data => {
//   return {
//     type: SET_BLOGS,
//     payload: data
//   };
// };

// export const setBlogsByEmail = data => {
//   return {
//     type: SET_BLOGS_BY_EMAIL,
//     payload: data
//   };
// };

// export const setBlogsById = data => {
//   return {
//     type: SET_BLOGS_BY_ID,
//     payload: data
//   };
// };

// export const getBlogs = () => dispatch => {
//   return axios({
//     method: "GET",
//     url: `http://localhost:3002/blogs`,
//     headers: { authorization: `Bearer ${token}` }
//   })
//     .then(result => {
//       dispatch(setBlogs(result.data));
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// export const getBlogsById = id => dispatch => {
//   return axios({
//     method: "GET",
//     url: `http://localhost:3002/blogs/id/${id}`,
//     headers: { authorization: `Bearer ${token}` }
//   })
//     .then(result => {
//       dispatch(setBlogsById(result.data));
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// export const getBlogsByEmail = email => dispatch => {
//   return axios({
//     method: "GET",
//     url: `http://localhost:3002/blogs/email/${email}`,
//     headers: { authorization: `Bearer ${token}` }
//   })
//     .then(result => {
//       dispatch(setBlogsByEmail(result.data));
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// export const postBlogs = values => dispatch => {
//   console.log("masuk");
//         // Picture: file === undefined ? null : file.path
//   return axios({
//     method: "POST",
//     url: `http://localhost:3002/blogs`,
//     headers: { authorization: `Bearer ${token}` },
//     data: values
//   })
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// // export const fetchBlogs = () => dispatch => {
// //   return axios({
// //     method: "GET",
// //     url: "http://localhost:3002/blogs",
// //     headers: { authorization: `Bearer ${token}` }
// //   }).then(response => {
// //     dispatch(getBlogs(response.data.data));
// //   });
// // };

// // export const fetchMyBlogs = () => dispatch => {
// //   return axios({
// //     method: "GET",
// //     url: "http://localhost:3002/blogs/id/:id",
// //     headers: { authorization: `Bearer ${token}` }
// //   }).then(response => {
// //     dispatch(myBlogs(response.data.data));
// //   })
// // }

// // export const postBlog = () => dispatch => {
// //   return axios({
// //     method: "POST",
// //     url: "http://localhost:3002/blogs/",
// //     headers: { authorization: `Bearer ${token}` }
// //   }).then(response => {
// //     history.push('/blogs');
// //   })
// // }