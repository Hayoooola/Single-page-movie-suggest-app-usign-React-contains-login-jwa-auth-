import axios from "axios";
import { FETCH_SELECTED_MOVIE_SUCCESS, FETCH_SELECTED_MOVIE_FAILED, MOVIE_LOADING } from "../../types/types";

export const fetchSelectedMovie = (movieId) => {
    return async (dispatch, useState) => {
        dispatch({ type: MOVIE_LOADING });

        const { token } = useState().loginStatus.authData;
        try {
            const response = await axios.get(`http://localhost:8000/movies/${movieId}`,
                { headers: { authorization: `Bearer ${token}` } }
            );

            dispatch({
                type: FETCH_SELECTED_MOVIE_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            dispatch({
                type: FETCH_SELECTED_MOVIE_FAILED,
                payload: err.message
            });
        }
    };
};