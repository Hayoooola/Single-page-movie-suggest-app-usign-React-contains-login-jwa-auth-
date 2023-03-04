import { LOGIN_LOADING, LOGIN_SUCCESSFULLY, LOGIN_FAILED, FETCH_ALL_MOVIE_SUCCESS } from "../types/types";

const initialLoginState = { loading: false, authData: [], error: null };
export const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return { loading: true, authData: [], error: null };
        case LOGIN_SUCCESSFULLY:
            return { loading: false, authData: action.payload, error: null };
        case LOGIN_FAILED:
            return { loading: false, authData: [], error: action.payload };
        case FETCH_ALL_MOVIE_SUCCESS:
            return { loading: false, authData: [], error: action.payload };
        default:
            return state;
    }
};