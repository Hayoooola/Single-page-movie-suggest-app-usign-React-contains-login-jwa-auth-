import { FETCH_SELECTED_MOVIE_REQUEST } from "../../types/types";

const fetchSelectedMovieRequest = (movieId) => {
    return {
        type: FETCH_SELECTED_MOVIE_REQUEST,
        payload: movieId
    };
};

export default fetchSelectedMovieRequest;