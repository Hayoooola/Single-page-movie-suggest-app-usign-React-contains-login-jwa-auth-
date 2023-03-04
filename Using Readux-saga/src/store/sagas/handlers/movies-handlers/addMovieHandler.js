import { call, put } from "redux-saga/effects";

import { ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILED, MOVIE_LOADING } from "../../../types/types";
import { addNewMovieRequest } from "../../requests/movies-requests/addMovieRequest";
import fetchAllMoviesHandler from "./fetchAllMoviesHandler";

export default function* addNewMovieHandler(action) {
    yield put({ type: MOVIE_LOADING });

    try {
        yield call(addNewMovieRequest,
            action.payload.title,
            action.payload.summery,
            action.payload.rating,
            action.payload.Year,
            action.payload.url
        );
        yield put({ type: ADD_MOVIE_SUCCESS });
        yield call(fetchAllMoviesHandler);

    } catch (err) {
        yield put({ type: ADD_MOVIE_FAILED, payload: err });
    }
}