import checkTokenValidity from "../../../actions/auth-actions/checkTokenValidity";

const checkLoginStatusRequest = () => {
    const token = JSON.parse(localStorage.getItem("token")) || null;
    const exp = JSON.parse(localStorage.getItem("exp")) || null;
    const email = JSON.parse(localStorage.getItem("email")) || null;

    if (checkTokenValidity(exp) && token) {
        const expiredTime = checkTokenValidity(exp) * 1000;
        return { token, email, expiredTime };
    }
};

export default checkLoginStatusRequest;
