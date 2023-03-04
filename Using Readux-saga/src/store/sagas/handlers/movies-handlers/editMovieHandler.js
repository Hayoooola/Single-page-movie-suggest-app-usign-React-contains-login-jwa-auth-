import { call, put } from "redux-saga/effects";

import { EDIT_MOVIE_SUCCESS, EDIT_MOVIE_FAILED, MOVIE_LOADING } from "../../../types/types";
import { editSelectedMovie } from "../../requests/movies-requests/editMovieRequest";
import fetchAllMoviesHandler from "./fetchAllMoviesHandler";

export default function* editSelectedMovieHandler(action) {
    yield put({ type: MOVIE_LOADING });

    try {
        yield call(editSelectedMovie,
            action.payload.movieObj,
            action.payload.title,
            action.payload.summery,
            action.payload.rating,
            action.payload.Year,
            action.payload.url
        );
        yield put({ type: EDIT_MOVIE_SUCCESS });
        yield call(fetchAllMoviesHandler);

    } catch (err) {
        yield put({ type: EDIT_MOVIE_FAILED, payload: err });
    }
}