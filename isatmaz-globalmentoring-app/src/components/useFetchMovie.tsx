import { useState, useEffect } from "react";
import useToggle, { useAppDispatch, useAppSelector } from '../hooks';
import { fetchMovies } from '../store/movies/moviesSlice';

const useFetchMovie = (chosenGenre: string, sortBy: string) => {
  const movies = useAppSelector((state) => state.movies.responseData?.data) as any;
  const dispatch = useAppDispatch();  
  useEffect(() => {
    if (!chosenGenre || chosenGenre.toLowerCase() === 'all') {
        dispatch(fetchMovies());
    } else {
        dispatch(fetchMovies({ filter: chosenGenre, sortBy: sortBy }));
    }
  }, [dispatch, chosenGenre, sortBy]);

  return [movies];
};

export default useFetchMovie;