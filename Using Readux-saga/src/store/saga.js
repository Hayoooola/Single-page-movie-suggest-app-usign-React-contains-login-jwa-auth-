import { takeLatest } from "redux-saga/effects";

import { CHECK_LOGIN_STATUS_REQUEST, LOGIN_REQUEST, SIGN_UP_REQUEST, LOG_OUT_REQUEST } from "./types/types";
import { ADD_MOVIE_REQUEST, FETCH_ALL_MOVIE_REQUEST, RATE_MOVIE_REQUEST, FETCH_SELECTED_MOVIE_REQUEST, DELETE_MOVIE_REQUEST, EDIT_MOVIE_REQUEST } from "./types/types";
// auth handlers
import checkLoginStatus from "./sagas/handlers/auth-handlers/checkLoginStatusHandler";
import loginHandler from "./sagas/handlers/auth-handlers/loginHandler";
import signUpHandler from "./sagas/handlers/auth-handlers/signUpHandler";
import logOutHandler from "./sagas/handlers/auth-handlers/logOutHandler";
// movie handlers
import fetchAllMoviesHandler from "./sagas/handlers/movies-handlers/fetchAllMoviesHandler";
import addNewMovieHandler from "./sagas/handlers/movies-handlers/addMovieHandler";
import fetchSelectedMovieHandler from "./sagas/handlers/movies-handlers/fetchSelectedMovieHandler";
import editSelectedMovieHandler from "./sagas/handlers/movies-handlers/editMovieHandler";
import rateSelectedMovieHandler from "./sagas/handlers/movies-handlers/reteMovieHandler";
import deleteMovieHandler from "./sagas/handlers/movies-handlers/deleteMovieHandler";

function* watcherSaga() {
    // auth actions
    yield takeLatest(CHECK_LOGIN_STATUS_REQUEST, checkLoginStatus);
    yield takeLatest(LOGIN_REQUEST, loginHandler);
    yield takeLatest(SIGN_UP_REQUEST, signUpHandler);
    yield takeLatest(LOG_OUT_REQUEST, logOutHandler);

    // movie actions
    yield takeLatest(FETCH_ALL_MOVIE_REQUEST, fetchAllMoviesHandler);
    yield takeLatest(FETCH_SELECTED_MOVIE_REQUEST, fetchSelectedMovieHandler);
    yield takeLatest(ADD_MOVIE_REQUEST, addNewMovieHandler);
    yield takeLatest(EDIT_MOVIE_REQUEST, editSelectedMovieHandler);
    yield takeLatest(RATE_MOVIE_REQUEST, rateSelectedMovieHandler);
    yield takeLatest(DELETE_MOVIE_REQUEST, deleteMovieHandler);
}

export default watcherSaga;