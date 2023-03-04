import axios from "axios";

export const fetchSelectedMovie = async (movieId) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const response = await axios.get(`http://localhost:8000/movies/${movieId}`,
        { headers: { authorization: `Bearer ${token}` } }
    );
    return response.data;
};