import { MOVIE_LOADING, FETCH_SELECTED_MOVIE_SUCCESS, FETCH_SELECTED_MOVIE_FAILED } from "../types/types";

const initialMovieArray = { loading: false, movieObj: {}, error: null };
export const selectedMovieReducer = (state = initialMovieArray, action) => {
    switch (action.type) {
        case MOVIE_LOADING:
            return { loading: true, movieObj: {}, error: null };
        case FETCH_SELECTED_MOVIE_SUCCESS:
            return { loading: false, movieObj: action.payload, error: null };
        case FETCH_SELECTED_MOVIE_FAILED:
            return { loading: false, movieObj: {}, error: action.payload };
        default:
            return state;
    }
};