import React from "react";
import 'reactjs-popup/dist/index.css';

import "./MovieBanner.css";

function MovieBanner(props){
    const {movieData}=props;

    function getYear(releaseDate){
        if(releaseDate){
            const date=new Date(releaseDate)
            return date.getFullYear();
        }
        return "";
    }

    function getDuration(runTime){
        if(runTime){
            const parts=runTime.split(":");
            if(parts && parts.length > 2){
                return parts[0] + "h " + parts[1] + "min" 
            }
        }
        return "";
    }

    return (
        <div className="movie-banner-div">
            <img alt={movieData.title} className="movie-detail-image" src={movieData.imageUrl} />
            <div className="movie-detail-div">
                <div className="movie-detail-genre-div">
                    <p className="movie-detail-title">{movieData.title}</p>    
                    <p className="movie-detail-rate">{movieData.rating}</p>  
                 </div>  
                
                <div className="movie-detail-genre-div">
                    {movieData.genre.map((genre, index)=> {
                        return <p key={genre} className="movie-detail-genre">{genre}{ (index===movieData.genre.length-1 ? '' : ',')}</p>
                    })}
                 </div>   
                 <div className="movie-detail-genre-div">
                    <p className="movie-detail-releaseDate">{getYear(movieData.releaseDate)}</p>  
                    <p className="movie-detail-releaseDate">{getDuration(movieData.runTime)}</p>  
                 </div>            
                 <p className="movie-detail-description">{movieData.description}</p>            
            </div>       
        </div>      
    )
}

export default MovieBanner