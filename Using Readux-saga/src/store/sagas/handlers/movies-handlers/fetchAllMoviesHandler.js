import { call, put } from "redux-saga/effects";

import { FETCH_ALL_MOVIE_FAILED, FETCH_ALL_MOVIE_SUCCESS, MOVIE_LOADING } from "../../../types/types";
import { fetchAllMovies } from "../../requests/movies-requests/fetchAllMoviesRequest";

export default function* fetchAllMoviesHandler() {
    yield put({ type: MOVIE_LOADING });

    try {
        const response = yield call(fetchAllMovies);
        yield put({
            type: FETCH_ALL_MOVIE_SUCCESS,
            payload: response
        });

    } catch (err) {
        yield put({ type: FETCH_ALL_MOVIE_FAILED, payload: err });
    }
}