import { call, put } from "redux-saga/effects";

import { LOGIN_SUCCESSFULLY, LOGIN_FAILED, LOGIN_LOADING } from "../../../types/types";
import { loginRequest } from "../../requests/auth-requests/loginRequest";
import checkLoginStatus from "./checkLoginStatusHandler";

export default function* loginHandler(action) {
    yield put({ type: LOGIN_LOADING });

    try {
        const response = yield call(loginRequest, action.payload.userName, action.payload.password);
        yield put({ type: LOGIN_SUCCESSFULLY, payload: response });
        yield call(checkLoginStatus);
    } catch (err) {
        yield put({ type: LOGIN_FAILED, payload: err });
    }
}