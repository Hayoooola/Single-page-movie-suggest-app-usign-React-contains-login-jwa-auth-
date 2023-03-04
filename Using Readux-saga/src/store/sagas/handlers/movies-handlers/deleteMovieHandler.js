import { call, put } from "redux-saga/effects";

import { DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAILED, MOVIE_LOADING } from "../../../types/types";
import { deleteMovie } from "../../requests/movies-requests/deleteMovieRequest";
import fetchAllMoviesHandler from "./fetchAllMoviesHandler";

export default function* deleteMovieHandler(action) {
    yield put({ type: MOVIE_LOADING });

    try {
        yield call(deleteMovie, action.payload);
        yield put({ type: DELETE_MOVIE_SUCCESS });
        yield call(fetchAllMoviesHandler);

    } catch (err) {
        yield put({ type: DELETE_MOVIE_FAILED, payload: err });
    }
}