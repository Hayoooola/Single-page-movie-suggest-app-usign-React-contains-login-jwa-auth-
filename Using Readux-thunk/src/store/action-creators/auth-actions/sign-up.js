import axios from "axios";
import { SIGN_UP_LOADING, SIGN_UP_SUCCESSFULLY, SIGN_UP_FAILED } from "../../types/types";

export const signUpRequest = (firstName, lastName, email, password) => {
    return async (dispatch) => {
        dispatch({ type: SIGN_UP_LOADING });

        try {
            const response = await axios.post("http://localhost:8000/auth/register", {
                firstName,
                lastName,
                email,
                password
            });
            dispatch({
                type: SIGN_UP_SUCCESSFULLY,
                payload: response.data
            });
        } catch (err) {
            dispatch({
                type: SIGN_UP_FAILED,
                payload: err.message
            });
        }
    };
};