import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/moviesSlice';
import movieOperationReducer from '../store/movies/movieOperationSlice';
export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        selectedMovie: movieOperationReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;