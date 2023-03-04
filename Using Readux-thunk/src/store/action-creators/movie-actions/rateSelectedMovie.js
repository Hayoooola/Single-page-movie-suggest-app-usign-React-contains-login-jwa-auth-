import axios from "axios";

import { MOVIE_LOADING, RATE_MOVIE_SUCCESS, RATE_MOVIE_FAILED } from "../../types/types";
import { fetchAllMovies } from "./fetch-all-movies";

export const rateSelectedMovie = (movieObj, rate) => {
    return async (dispatch, getState) => {
        dispatch({ type: MOVIE_LOADING });

        const votesArray = [...movieObj.votes];
        const { token } = getState().loginStatus.authData;
        const { email } = getState().loginStatus.authData;
        let config;
        const isUserVoteBefore = votesArray.some((voteObj) => voteObj.userName === email);
        if (isUserVoteBefore) {
            const newArray = votesArray.filter((vote) => vote.userName !== email);
            config = {
                votes: [...newArray, { userName: email, vote: rate }]
            };
        } else {
            config = {
                votes: [...votesArray, { userName: email, vote: rate }]
            };
        }
        try {
            const response = await axios.patch(`http://localhost:8000/movies/${movieObj.id}`,
                config, {
                headers: { authorization: `Bearer ${token}` }
            });

            dispatch({ type: RATE_MOVIE_SUCCESS });
        } catch (err) {
            dispatch({
                type: RATE_MOVIE_FAILED,
                payload: err.message
            });
        }

        dispatch(fetchAllMovies());
    };
};