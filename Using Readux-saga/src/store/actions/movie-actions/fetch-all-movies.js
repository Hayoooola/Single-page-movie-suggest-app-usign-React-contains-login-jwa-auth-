import { FETCH_ALL_MOVIE_REQUEST } from "../../types/types";

const fetchAllMoviesRequest = () => {
    return { type: FETCH_ALL_MOVIE_REQUEST };
};

export default fetchAllMoviesRequest;