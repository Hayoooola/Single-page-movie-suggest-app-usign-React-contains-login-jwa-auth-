import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action
export const fetchSelectedMovieRequest = createAsyncThunk("fetchMovieByID/movies", async ({ movieId }) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const response = await axios.get(`http://localhost:8000/movies/${movieId}`,
        { headers: { authorization: `Bearer ${token}` } }
    );

    return response.data;
});


// reducers
const fetchSelectedMovieReducer = createSlice({
    name: "fetchMovieByID",
    initialState: { loading: false, movieObj: {}, error: null },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSelectedMovieRequest.pending, () => {
                return { loading: true, movieObj: {}, error: null };
            })
            .addCase(fetchSelectedMovieRequest.fulfilled, (state, action) => {
                return { loading: false, movieObj: action.payload, error: null };
            })
            .addCase(fetchSelectedMovieRequest.rejected, (state, action) => {
                return { loading: false, movieObj: {}, error: action.error.message };
            });
    }
});

export default fetchSelectedMovieReducer.reducer;