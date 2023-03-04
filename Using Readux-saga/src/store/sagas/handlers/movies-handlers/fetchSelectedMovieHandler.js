import { call, put } from "redux-saga/effects";

import { FETCH_SELECTED_MOVIE_SUCCESS, FETCH_SELECTED_MOVIE_FAILED, MOVIE_LOADING } from "../../../types/types";
import { fetchSelectedMovie } from "../../requests/movies-requests/fetchSelectedMovieRequest";

export default function* fetchSelectedMovieHandler(action) {
    yield put({ type: MOVIE_LOADING });

    try {
        const response = yield call(fetchSelectedMovie, action.payload);
        yield put({
            type: FETCH_SELECTED_MOVIE_SUCCESS,
            payload: response
        });

    } catch (err) {
        yield put({ type: FETCH_SELECTED_MOVIE_FAILED, payload: err });
    }
}