import axios from "axios";

import { MOVIE_LOADING, EDIT_MOVIE_SUCCESS, EDIT_MOVIE_FAILED } from "../../types/types";
import { fetchAllMovies } from "./fetch-all-movies";

export const editSelectedMovie = (movieObj, title, summery, rating, Year, url) => {
    return async (dispatch) => {
        dispatch({ type: MOVIE_LOADING });
        const userName = JSON.parse(localStorage.getItem("email"));
        const token = JSON.parse(localStorage.getItem("token"));

        // calculate new vote array
        const prevVotesArray = movieObj.votes;
        const votesArrayRemovingEditingUsername = prevVotesArray.filter(voteObj => voteObj.userName !== userName);
        const newVoteArray = [...votesArrayRemovingEditingUsername, { userName, vote: rating }];

        const config = { Title: title, summery, votes: newVoteArray, Year, Poster: url };

        try {
            await axios.patch(`http://127.0.0.1:8000/movies/${movieObj.id}`,
                config, {
                headers: { authorization: `Bearer ${token}` }
            });

            dispatch({ type: EDIT_MOVIE_SUCCESS });
            dispatch(fetchAllMovies());
        } catch (err) {
            dispatch({
                type: EDIT_MOVIE_FAILED,
                payload: err.message
            });
        }
    };
};