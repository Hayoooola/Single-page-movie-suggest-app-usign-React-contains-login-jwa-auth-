import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import loginStatusReducer from "./features/auth-features/checkLoginStatus";
import loginReducer from "./features/auth-features/loginRequest";
import signUpReducer from "./features/auth-features/signUpRequest";
import fetchAllMoviesReducer from "./features/movie-features/fetch-all-movies";
import addNewMovieReducer from "./features/movie-features/add-new-movie";
import deleteMovieReducer from "./features/movie-features/delete-movie";
import editMovieReducer from "./features/movie-features/edit-selected-movie";
import rateMovieReducer from "./features/movie-features/rateSelectedMovie";
import fetchSelectedMovieReducer from "./features/movie-features/fetch-selected-movie";
import firstTimeVisitingPageReducer from "./features/auth-features/isUserFirstTimeVisitPage";

const rootReducer = combineReducers({
    loginData: loginReducer,
    signUpData: signUpReducer,
    loginStatus: loginStatusReducer,
    movies: fetchAllMoviesReducer,
    addNewMovie: addNewMovieReducer,
    deleteMovie: deleteMovieReducer,
    editMovie: editMovieReducer,
    rateMovie: rateMovieReducer,
    selectedMovie: fetchSelectedMovieReducer,
    firesTimeVisit: firstTimeVisitingPageReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;