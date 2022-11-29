import React, { useEffect, useState } from "react";
import Select from 'react-select'
import MovieCard from "./MovieCard";
import useToggle, { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchMovies, MovieType } from '../../store/movies/moviesSlice';

const sortByOptions = [
    { value: 'release_date', label: 'Release Date'}, 
    { value: 'vote_average', label: 'Average Vote' }
  ]

function MovieList(props:any){   
    const {onMovieClick, genre} = props;
    const isLoading = useAppSelector((state) => state.movies.isLoading);
    const movies = useAppSelector((state) => state.movies.responseData?.data) as MovieType[];
    const [sortBy, setSortBy] = useState("release_date");         
    const [sortingMenu, setSortingMenu] = useToggle(false);
    const dispatch = useAppDispatch();  
    useEffect(() => {
      if (!genre || genre.toLowerCase() === 'all') {
          dispatch(fetchMovies({ sortBy: sortBy}));
      } else {
          dispatch(fetchMovies({ filter: genre, sortBy: sortBy }));
      }
    }, [dispatch, genre, sortBy]);
    return (
        <div className="movie-list-div">
            {isLoading ? (
                <p>Loading movies</p>
            ) : (<>            
            <p className="movie-list-title"><b>{movies?.length}</b> movies found</p>
            <div className="movie-card-list-div"> 
                {movies?.map((movie:MovieType)=> {
                    return <MovieCard key={movie.title} onMovieClick={onMovieClick} movieData={movie}/>
                })}                        
            </div>
            </>)}
            <div className="movie-board-sort-by-option" >
                <p className="sort-by-label">SORT BY</p>
                <Select  defaultValue={{value: 'release_date', label: 'Release Date'}} options={sortByOptions} onChange={(e)=> {setSortBy(e?.value ? e.value : "release_date")}}/>
            </div>   
        </div>      
    )        
}

export default MovieList;