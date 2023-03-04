import { SIGN_UP_REQUEST } from "../../types/types";

const signUpRequest = (firstName, lastName, email, password) => {
    return {
        type: SIGN_UP_REQUEST,
        payload: {
            firstName,
            lastName,
            email,
            password
        }
    };
};

export default signUpRequest;