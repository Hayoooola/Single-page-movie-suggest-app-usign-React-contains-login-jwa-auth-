import axios from "axios";

import { MOVIE_LOADING, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAILED } from "../../types/types";
import { fetchAllMovies } from "./fetch-all-movies";

export const deleteMovie = (movieId) => {
    return async (dispatch, getState) => {
        dispatch({ type: MOVIE_LOADING });

        try {
            const { token } = getState().loginStatus.authData;
            await axios.delete(`http://127.0.0.1:8000/movies/${movieId}`,
                {
                    headers: { authorization: `Bearer ${token}` }
                });

            dispatch({ type: DELETE_MOVIE_SUCCESS });
            dispatch(fetchAllMovies());
        } catch (err) {
            dispatch({
                type: DELETE_MOVIE_FAILED,
                payload: err.message
            });
        }
    };
};