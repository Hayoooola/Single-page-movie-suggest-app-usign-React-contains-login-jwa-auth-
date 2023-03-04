import { LOGIN_STATUS_OK, LOGIN_STATUS_FAILED } from "../types/types";

const initialLoginState = { authData: {}, isUserLogin: false };
export const loginStatusReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGIN_STATUS_OK:
            return { authData: action.payload, isUserLogin: true };
        case LOGIN_STATUS_FAILED:
            return { authData: {}, isUserLogin: false };
        default:
            return state;
    }
};