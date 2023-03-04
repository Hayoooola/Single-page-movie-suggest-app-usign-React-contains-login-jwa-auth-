import axios from "axios";

export const deleteMovie = async (movieId) => {
    const token = JSON.parse(localStorage.getItem("token"));

    await axios.delete(`http://127.0.0.1:8000/movies/${movieId}`,
        {
            headers: { authorization: `Bearer ${token}` }
        });
};