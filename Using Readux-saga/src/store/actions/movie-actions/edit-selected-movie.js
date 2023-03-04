import { EDIT_MOVIE_REQUEST } from "../../types/types";

const editSelectedMovieRequest = (movieObj, title, summery, rating, Year, url) => {
    return {
        type: EDIT_MOVIE_REQUEST,
        payload: {
            movieObj,
            title,
            summery,
            rating,
            Year,
            url
        }
    };
};

export default editSelectedMovieRequest;