import { RATE_MOVIE_REQUEST } from "../../types/types";

const rateSelectedMovieRequest = (movieObj, rate) => {
    return {
        type: RATE_MOVIE_REQUEST,
        payload: {
            movieObj,
            rate
        }
    };
};

export default rateSelectedMovieRequest;