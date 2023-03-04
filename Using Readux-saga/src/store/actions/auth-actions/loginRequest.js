import { LOGIN_REQUEST } from "../../types/types";

const loginRequest = (userName, password) => {
    return {
        type: LOGIN_REQUEST,
        payload: { userName, password }
    };
};

export default loginRequest;