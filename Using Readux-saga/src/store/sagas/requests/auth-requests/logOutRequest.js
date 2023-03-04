import { toast } from 'react-toastify';

const logOutRequest = (ms = 1) => {
    setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("iat");
        localStorage.removeItem("exp");
        localStorage.removeItem("email");

        // show logOut toast message
        toast.error('Token expired!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        // redirect user to Home page
        window.location.href = "/login";
    }, ms);
};

export default logOutRequest;
