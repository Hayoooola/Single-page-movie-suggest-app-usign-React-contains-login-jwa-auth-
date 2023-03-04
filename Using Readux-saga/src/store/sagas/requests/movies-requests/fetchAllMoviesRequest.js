import axios from "axios";

export const fetchAllMovies = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const response = await axios.get("http://localhost:8000/movies",
        { headers: { authorization: `Bearer ${token}` } });
    return response.data;
};