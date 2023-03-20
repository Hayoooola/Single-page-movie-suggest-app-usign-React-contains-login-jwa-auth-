import { toast } from "react-toastify";

export const logOutRequest = () => {
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

    localStorage.removeItem("token");
    localStorage.removeItem("iat");
    localStorage.removeItem("exp");
    localStorage.removeItem("email");
};
