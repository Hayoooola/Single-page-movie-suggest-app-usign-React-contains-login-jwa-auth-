import { MOVIE_LOADING, FETCH_ALL_MOVIE_SUCCESS, FETCH_ALL_MOVIE_FAILED } from "../types/types";
import { RATE_MOVIE_SUCCESS, RATE_MOVIE_FAILED, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAILED, EDIT_MOVIE_SUCCESS, EDIT_MOVIE_FAILED, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILED } from "../types/types";

const initialMoviesArray = { loading: false, moviesArray: [], error: null };
export const fetchMoviesReducer = (state = initialMoviesArray, action) => {
    switch (action.type) {
        case MOVIE_LOADING:
            return { loading: true, moviesArray: [], error: null };
        case FETCH_ALL_MOVIE_SUCCESS:
            return { loading: false, moviesArray: action.payload, error: null };
        case FETCH_ALL_MOVIE_FAILED:
            return { loading: false, moviesArray: [], error: action.payload };
        case RATE_MOVIE_SUCCESS:
            return { loading: false, moviesArray: [], error: action.payload };
        case RATE_MOVIE_FAILED:
            return { loading: false, moviesArray: [], error: action.payload };
        case DELETE_MOVIE_SUCCESS:
            return { loading: false, moviesArray: [], error: action.payload };
        case DELETE_MOVIE_FAILED:
            return { loading: false, moviesArray: [], error: action.payload };
        case EDIT_MOVIE_SUCCESS:
            return { loading: false, moviesArray: [], error: action.payload };
        case EDIT_MOVIE_FAILED:
            return { loading: false, moviesArray: [], error: action.payload };
        case ADD_MOVIE_SUCCESS:
            return { loading: false, moviesArray: [], error: action.payload };
        case ADD_MOVIE_FAILED:
            return { loading: false, moviesArray: [], error: action.payload };
        default:
            return state;
    }
};