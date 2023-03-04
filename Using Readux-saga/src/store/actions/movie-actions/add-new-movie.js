import { ADD_MOVIE_REQUEST } from "../../types/types";

const addNewMovieRequest = (title, summery, rating, Year, url) => {
    return {
        type: ADD_MOVIE_REQUEST,
        payload: {
            title,
            summery,
            rating,
            Year,
            url
        }
    };
};

export default addNewMovieRequest;