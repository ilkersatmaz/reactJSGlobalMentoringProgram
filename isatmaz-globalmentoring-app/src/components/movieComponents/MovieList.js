import React from "react";
import MovieCard from "./MovieCard";
import useFetchMovie from "../useFetchMovie";

function MovieList(props){   
    const {onMovieClick, genre} = props;
    const [movieList] = useFetchMovie(genre);
    return (
        <div className="movie-list-div">
            <p className="movie-list-title"><b>{movieList?.length}</b> movies found</p>
            <div className="movie-card-list-div"> 
                {movieList?.map((movie)=> {
                    return <MovieCard key={movie.title} onMovieClick={onMovieClick} movieData={movie}/>
                })}                        
            </div>
        </div>      
    )        
}

export default MovieList;