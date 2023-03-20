import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAllMovies = createAsyncThunk("fetchAllMovies/movies", async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const response = await axios.get("http://localhost:8000/movies",
        { headers: { authorization: `Bearer ${token}` } });

    return response.data;
});

const fetchAllMoviesReducer = createSlice({
    name: fetchAllMovies,
    initialState: { loading: false, moviesArray: [], error: null },
    extraReducers: {
        [fetchAllMovies.pending]: () => {
            return { loading: true, moviesArray: [], error: null };
        },
        [fetchAllMovies.fulfilled]: (state, action) => {
            return { loading: false, moviesArray: action.payload, error: null };
        },
        [fetchAllMovies.rejected]: (state, action) => {
            return { loading: false, moviesArray: [], error: action.error.message };
        }
    }
});

export default fetchAllMoviesReducer.reducer;