import axios from "axios";
import jwtDecode from "jwt-decode";

export const loginRequest = async (userName, password) => {
    const response = await axios.post("http://localhost:8000/auth/login", {
        "email": userName,
        password
    });

    // putting login data to localStorage
    putLoginInformationToLocalStorage(response.data.access_token);

    return response.data;
};

const putLoginInformationToLocalStorage = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    const decodedToken = jwtDecode(token);
    localStorage.setItem("email", JSON.stringify(decodedToken.email));
    localStorage.setItem("iat", JSON.stringify(decodedToken.iat));
    localStorage.setItem("exp", JSON.stringify(decodedToken.exp));
};