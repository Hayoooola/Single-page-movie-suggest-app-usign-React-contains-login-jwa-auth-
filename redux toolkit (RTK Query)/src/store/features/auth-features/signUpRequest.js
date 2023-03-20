import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signUpRequest = createAsyncThunk("signUp/signUpRequest", async ({ firstName, lastName, email, password }) => {
    const response = await axios.post("http://localhost:8000/auth/register", {
        firstName,
        lastName,
        email,
        password
    });
    return response.data;
});

export const signUpSlice = createSlice({
    name: "signUp",
    initialState: { loading: false, authData: [], error: null },
    extraReducers: {
        [signUpRequest.pending]: () => {
            return { loading: true, authData: [], error: null };
        },
        [signUpRequest.fulfilled]: (state, action) => {
            return { loading: false, authData: action.payload, error: null };
        },
        [signUpRequest.rejected]: (state, action) => {
            return { loading: false, authData: [], error: action.error.message };
        },
    }
});

export default signUpSlice.reducer;