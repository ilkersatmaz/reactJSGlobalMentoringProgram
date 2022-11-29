import React from "react";
import Tabs from '../tabComponents/Tabs';
import MovieList from "./MovieList";

const genreList = ["All","Action","Comedy","Horor","Drama"];

function MovieBoard (props){
    const {onMovieClick}=props;          
    return (
        <div>
            <Tabs className="movie-board-tabs">
                    {genreList.map((genre)=>{
                    return (
                        <div key={genre} label={genre.toUpperCase()}>
                            <MovieList onMovieClick={onMovieClick} genre={genre}/>
                        </div>)
                    })}              
            </Tabs>     
        </div>        
    )
}

export default MovieBoard;