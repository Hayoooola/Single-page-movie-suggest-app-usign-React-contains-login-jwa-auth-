import axios from "axios";
import jwtDecode from "jwt-decode";

import { checkLoginStatus } from "./checkLoginStatus";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

// action
export const loginRequest = createAsyncThunk("login/loginRequest", async ({ userName, password }, thunkAPI) => {
    const response = await axios.post("http://localhost:8000/auth/login", {
        email: userName,
        password
    });

    // putting data in localStorage
    putLoginInformationToLocalStorage(response.data.access_token);

    // dispatch checkLoginStatus
    thunkAPI.dispatch(checkLoginStatus());

    return response.data;
});

// putting data in localStorage
const putLoginInformationToLocalStorage = (token) => {
    localStorage.setItem("token", JSON.stringify(token));

    const decodedToken = jwtDecode(token);

    localStorage.setItem("email", JSON.stringify(decodedToken.email));
    localStorage.setItem("iat", JSON.stringify(decodedToken.iat));
    localStorage.setItem("exp", JSON.stringify(decodedToken.exp));
};

// reducers
const loginSlice = createSlice({
    name: "login",
    initialState: {
        loading: false,
        authData: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(loginRequest.pending, () => {
            return { loading: true, authData: [], error: null };
        });

        builder.addCase(loginRequest.fulfilled, (state, action) => {
            return { loading: false, authData: action.payload, error: null };
        });

        builder.addCase(loginRequest.rejected, (state, action) => {
            return { loading: false, authData: [], error: action.error.message };
        });
    }
}
);



export default loginSlice.reducer;