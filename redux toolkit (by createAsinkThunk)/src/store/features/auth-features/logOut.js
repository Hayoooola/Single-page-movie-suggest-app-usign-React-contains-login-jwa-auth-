import { createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const logOutRequest = createAction("logOut", () => {

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
    // redirect user to login page after closing toast
    setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("iat");
        localStorage.removeItem("exp");
        localStorage.removeItem("email");
        window.location.href = "/login";
    }, 3000);

    return { type: "logOut" };
});
