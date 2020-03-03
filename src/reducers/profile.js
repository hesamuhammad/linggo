import { SET_PROFILE, SET_PROFILE_BY_ID } from "../actions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_PROFILE:
        return action.payload.data;
      case SET_PROFILE_BY_ID:        
        return action.payload.data;
      default:
        return state;
    }
  }