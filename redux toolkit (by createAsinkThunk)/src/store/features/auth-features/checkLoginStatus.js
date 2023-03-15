const { createAction, createReducer } = require("@reduxjs/toolkit");

// action
export const checkLoginStatus = createAction("checkLoginStatus", () => {
    const token = JSON.parse(localStorage.getItem("token")) || null;
    const exp = JSON.parse(localStorage.getItem("exp")) || null;

    const expiredTime = checkTokenValidity(exp);

    return (expiredTime && token) ? { payload: token } : { payload: false };
});

// checking validity of token
const checkTokenValidity = (expTime) => {
    const expiredTime = new Date(expTime * 1000).getTime() - new Date().getTime();
    if (expiredTime > 0 && expiredTime <= 3600000) {
        return expiredTime;
    } else {
        return false;
    }
};

// reducer
const initialLoginStatusState = { isUserLogin: false, token: null };
const loginStatusReducer = createReducer(initialLoginStatusState, builder =>
    builder.addCase("checkLoginStatus", (state, action) => {
        return action.payload ? { isUserLogin: true, token: action.payload } : { isUserLogin: false, token: null };
    })
);


export default loginStatusReducer;
