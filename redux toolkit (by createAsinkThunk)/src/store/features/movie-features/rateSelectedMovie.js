import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { checkLoginStatus } from "../auth-features/checkLoginStatus";

// action
export const rateMovieRequest = createAsyncThunk("rateMovie/movies", async ({ movieObj, value: rate }, thunkApi) => {
    const votesArray = [...movieObj.votes];
    const token = JSON.parse(localStorage.getItem("token"));
    const email = JSON.parse(localStorage.getItem("email"));
    let config;

    // configure voteArray and replace prev user vote
    const isUserVoteBefore = votesArray.some((voteObj) => voteObj.userName === email);
    if (isUserVoteBefore) {
        const newArray = votesArray.filter((vote) => vote.userName !== email);
        config = {
            votes: [...newArray, { userName: email, vote: rate }]
        };
    } else {
        config = {
            votes: [...votesArray, { userName: email, vote: rate }]
        };
    }

    const response = await axios.patch(`http://localhost:8000/movies/${movieObj.id}`,
        config, {
        headers: { authorization: `Bearer ${token}` }
    });

    thunkApi.dispatch(checkLoginStatus());

    return response.data;
});

// reducers
const rateMovieReducer = createSlice({
    name: "rateMovie",
    initialState: { loading: false, data: [], error: null },
    extraReducers: (builder) => {
        builder
            .addCase(rateMovieRequest.pending, () => {
                return { loading: true, data: [], error: null };
            })
            .addCase(rateMovieRequest.fulfilled, (state, action) => {
                return { loading: false, data: action.payload, error: null };
            })
            .addCase(rateMovieRequest.rejected, (state, action) => {
                return { loading: false, data: [], error: action.error.message };
            });
    }
});

export default rateMovieReducer.reducer;