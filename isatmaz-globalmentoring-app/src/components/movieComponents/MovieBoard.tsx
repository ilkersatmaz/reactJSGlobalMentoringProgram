import React, { useState } from "react";
import Tabs from '../tabComponents/Tabs';
import MovieList from "./MovieList";

const genreList = ["All","Action","Comedy","Horor","Drama"];


function MovieBoard (props:any){
    const {onMovieClick, searchText, setSearchText}=props;  
    const [selectedGenre, setSelectedGenre]=useState("ALL"); 
    return (
        <div className="movie-board-container">
            <Tabs className="movie-board-tabs" selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}>
                    {genreList.map((genre)=>{
                    return (
                        <div key={genre} id={genre.toUpperCase()}>
                            <MovieList onMovieClick={onMovieClick} genre={genre} setSelectedGenre={setSelectedGenre} searchText={searchText} setSearchText={setSearchText}/>
                        </div>)
                    })}              
            </Tabs>                      
        </div>        
    )
}

export default MovieBoard;