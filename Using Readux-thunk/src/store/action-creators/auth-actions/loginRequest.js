import axios from "axios";
import jwtDecode from "jwt-decode";

import { LOGIN_LOADING, LOGIN_SUCCESSFULLY, LOGIN_FAILED } from "../../types/types";
import checkLoginStatus from "./checkLoginStatus";

export const loginRequest = (userName, password) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_LOADING });

        try {
            const response = await axios.post("http://localhost:8000/auth/login", {
                "email": userName,
                password
            });
            dispatch({
                type: LOGIN_SUCCESSFULLY,
                payload: response.data
            });

            // putting login data to localStorage
            putLoginInformationToLocalStorage(response.data.access_token);

            // unlocking user access to visit all pages
            dispatch(checkLoginStatus());
        } catch (err) {
            dispatch({
                type: LOGIN_FAILED,
                payload: err.message
            });
        }
    };
};

const putLoginInformationToLocalStorage = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    const decodedToken = jwtDecode(token);
    localStorage.setItem("email", JSON.stringify(decodedToken.email));
    localStorage.setItem("iat", JSON.stringify(decodedToken.iat));
    localStorage.setItem("exp", JSON.stringify(decodedToken.exp));
};