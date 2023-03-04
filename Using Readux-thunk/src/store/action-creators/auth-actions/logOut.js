import { toast } from 'react-toastify';

import { LOGOUT_SUCCESSFULLY } from "../../types/types";

const logOut = () => {
    // show logOut toast
    toast.error('ReLogin require!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (dispatch) => {
        dispatch({
            type: LOGOUT_SUCCESSFULLY
        });

        // redirect user to login page after closing toast
        setTimeout(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("iat");
            localStorage.removeItem("exp");
            localStorage.removeItem("email");
            window.location.href = "/login";
        }, 3000);
    };
};

export default logOut;
