import { SET_CONTACT } from "../actions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT:
            return action.payload;
        default:
            return state;
    }
};