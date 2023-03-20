import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import loginStatusReducer from "../features/auth-features/checkLoginStatus";
import firstTimeVisitingPageReducer from "../features/auth-features/isUserFirstTimeVisitPage";
import { authApi } from "../API/authApi";
import { movieApi } from "../API/movieApi";

const rootReducer = combineReducers({
    loginStatus: loginStatusReducer,
    firesTimeVisit: firstTimeVisitingPageReducer,
    [authApi.reducerPath]: authApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(movieApi.middleware)
});

export default store;