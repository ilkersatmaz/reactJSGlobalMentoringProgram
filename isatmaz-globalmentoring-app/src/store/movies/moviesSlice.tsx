import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface MovieType {
    title: string;
    tagline?: string;
    vote_average: number | string;
    vote_count?: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget?: number;
    revenue?: number;
    runtime: number | string ;
    genres: string[];
    id?: number;
}
interface ApiResponseType {
    data: MovieType[];
    total: number;
    offset: number;
    limit: number;
}
export interface StateType {
    isLoading: boolean;
    error: boolean;
    responseData: null | ApiResponseType;
}

const initialState: StateType = {
    isLoading: false,
    error: false,
    responseData: null,
};

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (additionalQuery?: {
        search?: string;
        filter?: string;
        sortBy?: string;
    }) => {
        const sortBy = additionalQuery?.sortBy
            ? `sortBy=${additionalQuery.sortBy}&`
            : 'sortBy=release_date&';
        const search = additionalQuery?.search
            ? `search=${additionalQuery.search}&searchBy=title&`
            : '';
        const filter = additionalQuery?.filter
            ? `filter=${additionalQuery.filter}&`
            : '';
        return axios
            .get(
                `http://localhost:4000/movies?${sortBy}${filter}${search}sortOrder=desc&limit=20`,
            )
            .then((res) => res.data);
    },
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.responseData = action.payload;
            state.error = false;
            state.isLoading = false;
        });
        builder.addCase(fetchMovies.rejected, (state) => {
            state.isLoading = false;
            state.responseData = null;
            state.error = true;
        });
    },
});

export default moviesSlice.reducer;