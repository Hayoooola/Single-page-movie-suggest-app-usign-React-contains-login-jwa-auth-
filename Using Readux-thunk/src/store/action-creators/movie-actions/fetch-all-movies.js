import axios from "axios";
import { MOVIE_LOADING, FETCH_ALL_MOVIE_SUCCESS, FETCH_ALL_MOVIE_FAILED } from "../../types/types";

export const fetchAllMovies = () => {
    return async (dispatch) => {
        dispatch({ type: MOVIE_LOADING });
        const token = JSON.parse(localStorage.getItem("token"));

        try {
            const response = await axios.get("http://localhost:8000/movies",
                { headers: { authorization: `Bearer ${token}` } });

            dispatch({
                type: FETCH_ALL_MOVIE_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            dispatch({
                type: FETCH_ALL_MOVIE_FAILED,
                payload: err.message
            });
        }
    };
};