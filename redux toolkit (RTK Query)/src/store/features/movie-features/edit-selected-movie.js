import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { fetchAllMovies } from "./fetch-all-movies";

// action
export const editMovieRequest = createAsyncThunk("editMovie/movies", async ({ movieObj, title, summery, rating, Year, url }, thunkApi) => {
    const userName = JSON.parse(localStorage.getItem("email"));
    const token = JSON.parse(localStorage.getItem("token"));

    // calculate new vote array
    const prevVotesArray = movieObj.votes;
    const votesArrayRemovingEditingUsername = prevVotesArray.filter(voteObj => voteObj.userName !== userName);
    const newVoteArray = [...votesArrayRemovingEditingUsername, { userName, vote: rating }];

    const config = { Title: title, summery, votes: newVoteArray, Year, Poster: url };

    const response = await axios.patch(`http://127.0.0.1:8000/movies/${movieObj.id}`,
        config, {
        headers: { authorization: `Bearer ${token}` }
    });

    thunkApi.dispatch(fetchAllMovies());

    return response.data;
});

// reducers
const editMovieReducer = createSlice({
    name: "editMovie",
    initialState: { loading: false, data: [], error: null },
    extraReducers: (builder) => {
        builder
            .addCase(editMovieRequest.pending, () => {
                return { loading: true, data: [], error: null };
            })
            .addCase(editMovieRequest.fulfilled, (state, action) => {
                return { loading: false, data: action.payload, error: null };
            })
            .addCase(editMovieRequest.rejected, (state, action) => {
                return { loading: false, data: [], error: action.error.message };
            });
    }
});

export default editMovieReducer.reducer;