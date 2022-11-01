import React from "react";
import MovieCard from "./MovieCard";
import {movies} from "../../movieData";

function MovieList(props){   
    const {onMovieClick, genre} = props;
    const filteredMovie = genre === "All" ? movies : movies.filter(movie => movie.genre.indexOf(genre) > -1);
    return (
        <div className="movie-list-div">
            <p className="movie-list-title"><b>{filteredMovie.length}</b> movies found</p>
            <div className="movie-card-list-div"> 
                {filteredMovie.map((movie)=> {
                    return <MovieCard key={movie.title} onMovieClick={onMovieClick} movieData={movie}/>
                })}                        
            </div>
        </div>      
    )        
}

export default MovieList;