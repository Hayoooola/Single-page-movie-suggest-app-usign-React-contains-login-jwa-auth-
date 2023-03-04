import { DELETE_MOVIE_REQUEST } from "../../types/types";

const deleteMovieRequest = (movieId) => {
    return {
        type: DELETE_MOVIE_REQUEST,
        payload: movieId
    };
};

export default deleteMovieRequest;