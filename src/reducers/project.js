import {
  SET_PROJECT,
  SET_PROJECT_BY_ID,
  SET_PROFILE_BY_ID_USERS
} from "../actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return action.payload.data;
    case SET_PROJECT_BY_ID:
      return action.payload.data;
    case SET_PROFILE_BY_ID_USERS:
      console.log("reducers SET_PROFILE_BY_ID_USERS", state);
      console.log("reducers SET_PROFILE_BY_ID_USERS action", action);

      // return {
      //   detailProject: action.payload
      // };
      return action.payload.data;
    default:
      return state;
  }
};
