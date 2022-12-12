import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MovieType } from './moviesSlice';

interface StateType {
    isLoading: boolean;
    error: boolean;
    movieData: null | MovieType;
}

const initialState: StateType = {
    isLoading: false,
    error: false,
    movieData: null,
};

export const fetchSelectedMovie = createAsyncThunk(
    'selectedMovie/fetchSelectedMovie',
    async (id: number) => {
        return axios
            .get(`http://localhost:4000/movies/${id}`)
            .then((res) => res.data);
    },
);

export const updateSelectedMovie = createAsyncThunk(
    'selectedMovie/updateSelectedMovie',
    async (movieData: MovieType) => {
        return axios
            .put(`http://localhost:4000/movies`, movieData)
            .then((res) => res.data);
    },
);

export const addNewMovie = createAsyncThunk(
    'selectedMovie/addNewMovie',
    async (movieData: MovieType) => {
        return axios
            .post(`http://localhost:4000/movies`, movieData)
            .then((res) => res.data);
    },
);

export const deleteSelectedMovie = createAsyncThunk(
    'selectedMovie/deleteSelectedMovie',
    async (id: number) => {
        return axios
            .delete(`http://localhost:4000/movies/${id}`, {})
            .then((res) => res);
    },
);

const movieOperationSlice = createSlice({
    name: 'selectedMovie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSelectedMovie.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchSelectedMovie.fulfilled, (state, action) => {
            state.movieData = action.payload;
            state.error = false;
            state.isLoading = false;
        });
        builder.addCase(fetchSelectedMovie.rejected, (state) => {
            state.isLoading = false;
            state.movieData = null;
            state.error = true;
        });
        builder.addCase(deleteSelectedMovie.fulfilled, (state) => {
            state.error = false;
            state.movieData = null;
        });
        builder.addCase(updateSelectedMovie.pending, (state) => {
            state.error = false;
            state.isLoading = true;
        });
        builder.addCase(updateSelectedMovie.fulfilled, (state) => {
            state.error = false;
            state.isLoading = false;
        });
        builder.addCase(updateSelectedMovie.rejected, (state) => {
            state.error = true;
            state.isLoading = false;
        });
        builder.addCase(addNewMovie.pending, (state) => {
            state.error = false;
            state.isLoading = true;
        });
        builder.addCase(addNewMovie.fulfilled, (state) => {
            state.error = false;
            state.isLoading = false;
        });
        builder.addCase(addNewMovie.rejected, (state) => {
            state.error = true;
            state.isLoading = false;
        });
    },
});

export default movieOperationSlice.reducer;