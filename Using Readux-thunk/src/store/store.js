import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { loginReducer } from "./reducers/loginReducer";
import { signUpReducer } from "./reducers/signupReducer";
import { loginStatusReducer } from "./reducers/loginStatus";
import { fetchMoviesReducer } from "./reducers/moviesReducer";
import { selectedMovieReducer } from "./reducers/selectedMovieReducer";

const reducers = combineReducers({ loginData: loginReducer, signUpData: signUpReducer, loginStatus: loginStatusReducer, movies: fetchMoviesReducer, selectedMovie: selectedMovieReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;