import { CHECK_LOGIN_STATUS_REQUEST } from "../../types/types";

const loginStatusRequest = () => {
    return { type: CHECK_LOGIN_STATUS_REQUEST };
};

export default loginStatusRequest;
