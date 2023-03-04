import axios from "axios";

import { MOVIE_LOADING, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILED } from "../../types/types";
import { fetchAllMovies } from "./fetch-all-movies";

export const addNewMovie = (title, summery, rating, Year, url) => {
    return async (dispatch) => {
        dispatch({ type: MOVIE_LOADING });
        const userName = JSON.parse(localStorage.getItem("email"));
        const token = JSON.parse(localStorage.getItem("token"));

        // calculate new vote array
        const VoteArray = [{ userName, vote: rating }];

        const config = { Title: title, summery, votes: VoteArray, Year, Poster: url, userName };

        try {
            await axios.post(`http://127.0.0.1:8000/movies`,
                config, {
                headers: { authorization: `Bearer ${token}` }
            });

            dispatch({ type: ADD_MOVIE_SUCCESS });
            dispatch(fetchAllMovies());
        } catch (err) {
            dispatch({
                type: ADD_MOVIE_FAILED,
                payload: err.message
            });
        }
    };
};