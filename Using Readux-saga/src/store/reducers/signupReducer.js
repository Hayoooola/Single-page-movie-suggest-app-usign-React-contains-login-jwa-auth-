import { SIGN_UP_LOADING, SIGN_UP_SUCCESSFULLY, SIGN_UP_FAILED } from "../types/types";

const initialSignUpState = { loading: false, authData: [], error: null }
export const signUpReducer = (state = initialSignUpState, action) => {
    switch (action.type) {
        case SIGN_UP_LOADING:
            return { loading: true, authData: [], error: null }
        case SIGN_UP_SUCCESSFULLY:
            return { loading: false, authData: action.payload, error: null }
        case SIGN_UP_FAILED:
            return { loading: false, authData: [], error: action.payload }
        default:
            return state
    }
}