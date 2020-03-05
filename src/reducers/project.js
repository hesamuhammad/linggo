import {
  SET_PROJECT,
  SET_PROJECT_BY_ID,
  SET_PROFILE_BY_ID_USERS,
  SET_DELETE_PROJECT
} from "../actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return action.payload.data;
    case SET_PROJECT_BY_ID:
      return action.payload.data;
    case SET_PROFILE_BY_ID_USERS:
      return action.payload.data;
    case SET_DELETE_PROJECT:
      return action.payload.data;
    default:
      return state;
  }
};
