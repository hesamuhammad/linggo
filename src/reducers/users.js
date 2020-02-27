import { SET_LOGIN } from "../actions";

const initialState = {
    isLogin: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
