import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';

import { loginReducer } from "./reducers/loginReducer";
import { signUpReducer } from "./reducers/signupReducer";
import { loginStatusReducer } from "./reducers/loginStatus";
import { fetchMoviesReducer } from "./reducers/moviesReducer";
import { selectedMovieReducer } from "./reducers/selectedMovieReducer";
import watcherSaga from "./saga";

// create reducer
const reducers = combineReducers({ loginData: loginReducer, signUpData: signUpReducer, loginStatus: loginStatusReducer, movies: fetchMoviesReducer, selectedMovie: selectedMovieReducer });

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);

export default store;