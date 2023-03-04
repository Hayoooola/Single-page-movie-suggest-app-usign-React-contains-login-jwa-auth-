
import { LOGIN_STATUS_OK, LOGIN_STATUS_FAILED } from "../../types/types";
import logOut from "./logOut";

const checkLoginStatus = () => {
    return (dispatch) => {
        const token = JSON.parse(localStorage.getItem("token")) || null;
        const exp = JSON.parse(localStorage.getItem("exp")) || null;
        const iat = JSON.parse(localStorage.getItem("iat")) || null;
        const email = JSON.parse(localStorage.getItem("email")) || null;
        const expiredTime = checkTokenValidity(exp);

        if (expiredTime && token) {
            dispatch({
                type: LOGIN_STATUS_OK,
                payload: {
                    token,
                    exp,
                    iat,
                    email
                }
            });

            // logOut automatically after expiredTime
            setTimeout(() => {
                dispatch(logOut());

            }, expiredTime);

        } else {
            dispatch({
                type: LOGIN_STATUS_FAILED
            });
        }
    };
};

const checkTokenValidity = (expTime) => {
    const expiredTime = new Date(expTime * 1000).getTime() - new Date().getTime();
    if (expiredTime > 0 && expiredTime <= 3600000) {
        return expiredTime;
    } else {
        return false;
    }
};

export default checkLoginStatus;
