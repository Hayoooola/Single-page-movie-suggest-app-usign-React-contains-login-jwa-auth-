import { call, put } from "redux-saga/effects";

import { SIGN_UP_FAILED, SIGN_UP_SUCCESSFULLY, SIGN_UP_LOADING } from "../../../types/types";
import { signUpRequest } from "../../requests/auth-requests/signUpRequest";
import checkLoginStatus from "./checkLoginStatusHandler";

export default function* signUpHandler(action) {
    yield put({ type: SIGN_UP_LOADING });

    try {
        yield call(signUpRequest,
            action.payload.firstName,
            action.payload.lastName,
            action.payload.email,
            action.payload.password);
        yield put({ type: SIGN_UP_SUCCESSFULLY });
        yield call(checkLoginStatus);
    } catch (err) {
        yield put({ type: SIGN_UP_FAILED, payload: err });
    }
}