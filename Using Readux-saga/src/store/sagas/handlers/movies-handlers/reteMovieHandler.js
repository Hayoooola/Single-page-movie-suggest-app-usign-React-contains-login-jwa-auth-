import { call, put } from "redux-saga/effects";

import { RATE_MOVIE_SUCCESS, RATE_MOVIE_FAILED, MOVIE_LOADING } from "../../../types/types";
import { rateSelectedMovie } from "../../requests/movies-requests/reteMovieRequest";
import fetchAllMoviesHandler from "./fetchAllMoviesHandler";

export default function* rateSelectedMovieHandler(action) {
    yield put({ type: MOVIE_LOADING });

    try {
        yield call(rateSelectedMovie,
            action.payload.movieObj,
            action.payload.rate
        );
        yield put({ type: RATE_MOVIE_SUCCESS });
        yield call(fetchAllMoviesHandler);

    } catch (err) {
        yield put({ type: RATE_MOVIE_FAILED, payload: err });
    }
}