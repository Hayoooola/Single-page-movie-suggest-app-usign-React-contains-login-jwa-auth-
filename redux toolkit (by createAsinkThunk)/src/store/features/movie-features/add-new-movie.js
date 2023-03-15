import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { fetchAllMovies } from "./fetch-all-movies";

// action
export const addNewMovieRequest = createAsyncThunk("addNewMovie/movies", async ({ title, summery, rating, Year, url }, thunkApi) => {
    console.log(title, summery, rating, Year, url);
    const userName = JSON.parse(localStorage.getItem("email"));
    const token = JSON.parse(localStorage.getItem("token"));

    // calculate new vote array
    const VoteArray = [{ userName, vote: rating }];

    const config = { Title: title, summery, votes: VoteArray, Year, Poster: url, userName };

    const response = await axios.post(`http://127.0.0.1:8000/movies`,
        config, {
        headers: { authorization: `Bearer ${token}` }
    });

    // dispatching fetchAllMovies to correct data to show
    thunkApi.dispatch(fetchAllMovies());

    return response.data;
});

// reducers
const addNewMovieReducer = createSlice({
    name: "addNewMovie",
    initialState: { loading: false, data: [], error: null },
    extraReducers: (builder) => {
        builder.addCase(addNewMovieRequest.pending, () => {
            return { loading: true, data: [], error: null };
        });
        builder.addCase(addNewMovieRequest.fulfilled, (state, action) => {
            return { loading: false, data: action.payload, error: null };
        });
        builder.addCase(addNewMovieRequest.rejected, (state, action) => {
            return { loading: false, data: [], error: action.error.message };
        });
    }
});

export default addNewMovieReducer.reducer;
