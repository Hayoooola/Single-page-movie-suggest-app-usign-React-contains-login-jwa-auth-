import axios from "axios";

export const signUpRequest = async (firstName, lastName, email, password) => {
    const response = await axios.post("http://localhost:8000/auth/register", {
        firstName,
        lastName,
        email,
        password
    });
    return response.data;
};