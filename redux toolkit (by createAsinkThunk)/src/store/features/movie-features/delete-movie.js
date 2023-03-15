import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { fetchAllMovies } from "./fetch-all-movies";

// action
export const deleteMovieRequest = createAsyncThunk("deleteMovie/movie", ({ movieId }, thunkApi) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const response = axios.delete(`http://127.0.0.1:8000/movies/${movieId}`,
        {
            headers: { authorization: `Bearer ${token}` }
        });

    thunkApi.dispatch(fetchAllMovies());

    return response.data;
});

// reducers
const deleteMovieReducer = createSlice({
    name: "deleteMovie",
    initialState: { loading: false, data: [], error: null },
    extraReducers: (builder) => {
        builder
            .addCase(deleteMovieRequest.pending, () => {
                return { loading: true, data: [], error: null };
            })
            .addCase(deleteMovieRequest.fulfilled, (state, action) => {
                return { loading: false, data: action.payload, error: null };
            })
            .addCase(deleteMovieRequest.rejected, (state, action) => {
                return { loading: false, data: [], error: action.error.message };
            });
    }
});

export default deleteMovieReducer.reducer

