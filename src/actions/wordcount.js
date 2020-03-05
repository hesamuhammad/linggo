import axios from "axios";
const OWN_API = process.env.REACT_APP_API;

export const GET_WORD = "GET_WORD";
export const GET_WORD_COUNT = "GET_WORD_COUNT";

export const showData = data => {
  return {
    type: GET_WORD,
    payload: data
  };
};

export const dataWord = data => {
  return {
    type: GET_WORD_COUNT,
    payload: data
  };
};

export const fetchData = () => dispatch => {
  return axios.get(`${OWN_API}/pricing`).then(res => {
    dispatch(showData(res.data.data));
  });
};

export const inputProject = (data, history) => dispatch => {
  console.log("data : ", data);
  return axios.post(`${OWN_API}/project/addlocal`, data).then(res => {
    if (res.status === 200) {
      console.log("success : ", res);
      // history.push("/project");
    }
  });
};

export const wordCount = (data, history) => dispatch => {
  console.log("data ssss", data);
  // return axios
  //   .post(`http://localhost:3007/project/counttext`, data)
  //   .then(res => {
  return axios.post(`${OWN_API}project/counttext`, data).then(res => {
    if (res.status === 200) {
      let datacount = {
        jumlahKata: res.data.data.jumlahKata,
        hargaTotal: res.data.data.hargaTotal
      };
      localStorage.setItem("wordcount", JSON.stringify(datacount));
      window.location.reload();
    }
  });
};
