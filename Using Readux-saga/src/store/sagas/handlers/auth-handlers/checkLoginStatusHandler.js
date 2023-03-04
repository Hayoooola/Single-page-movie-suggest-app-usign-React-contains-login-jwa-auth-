import { call, put } from "redux-saga/effects";

import { LOGIN_STATUS_OK, LOGIN_STATUS_FAILED, LOADING } from "../../../types/types";
import checkLoginStatusRequest from "../../requests/auth-requests/checkLoginStatusRequest";
import logOutRequest from "../../requests/auth-requests/logOutRequest";

function* checkLoginStatus() {
    yield put({ type: LOADING });
    const response = yield call(checkLoginStatusRequest);
    if (response) {
        yield put({ type: LOGIN_STATUS_OK, payload: response });

        // logOut automatically after exp 
        const exp = response.expiredTime - new Date().getTime();
        yield call(logOutRequest, exp);
    } else {
        yield put({ type: LOGIN_STATUS_FAILED });
    }
}

export default checkLoginStatus;
