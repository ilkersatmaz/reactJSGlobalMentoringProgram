import React, { useState } from "react";
import Tabs from '../tabComponents/Tabs';
import MovieList from "./MovieList";

const genreList = ["All","Action","Comedy","Horor","Drama"];


function MovieBoard (props:any){
    const {onMovieClick}=props;     
    return (
        <div className="movie-board-container">
            <Tabs className="movie-board-tabs">
                    {genreList.map((genre)=>{
                    return (
                        <div key={genre} id={genre.toUpperCase()}>
                            <MovieList onMovieClick={onMovieClick} genre={genre}/>
                        </div>)
                    })}              
            </Tabs>                      
        </div>        
    )
}

export default MovieBoard;