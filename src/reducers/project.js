import { SET_PROJECT, SET_PROJECT_BY_ID } from "../actions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_PROJECT:
        return action.payload.data;
      case SET_PROJECT_BY_ID:
        return action.payload.data;
      default:
        return state;
    }
  }