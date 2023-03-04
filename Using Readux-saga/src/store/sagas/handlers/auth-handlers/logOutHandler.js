import { call, put } from "redux-saga/effects";

import { LOGOUT_SUCCESSFULLY, LOADING } from "../../../types/types";
import logOutRequest from "../../requests/auth-requests/logOutRequest";
import checkLoginStatus from "./checkLoginStatusHandler";

export default function* logOutHandler(ms = 1) {
    yield put({ type: LOADING });
    yield call(logOutRequest, ms);
    yield put({ type: LOGOUT_SUCCESSFULLY });
    yield call(checkLoginStatus);
}