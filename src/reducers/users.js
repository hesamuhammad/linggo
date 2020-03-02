const loginstatus = localStorage.getItem("token");
const initialState = loginstatus
    ? {
          isLogin: true,
          user: {}
      }
    : {
          isLogin: false,
          user: {}
      };

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            return {
                isLogin: true
            };
        case "LOGGED_OUT":
            return {
                isLogin: false
            };
        case "GET_BY_ID":
            return {
                user: action.payload
            };
        default:
            return state;
    }
};

export default usersReducer;
