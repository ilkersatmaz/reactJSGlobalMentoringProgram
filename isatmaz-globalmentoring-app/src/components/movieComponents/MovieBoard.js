import React,{Component} from "react";
import Tabs from '../tabComponents/Tabs';
import MovieList from "./MovieList";

const genreList = ["All","Action","Comedy","Horor","Drama"];

class MovieBoard extends Component{
    render(){
        const {onMovieClick}=this.props;
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
}

export default MovieBoard;