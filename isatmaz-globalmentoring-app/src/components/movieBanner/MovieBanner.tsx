import React from "react";
import 'reactjs-popup/dist/index.css';

import "./MovieBanner.css";

function MovieBanner(props : any){
    const {movieData}=props;

    function getYear(releaseDate : string){
        if(releaseDate){
            const date=new Date(releaseDate)
            return date.getFullYear();
        }
        return "";
    }

    function getDuration(runTime : string){
        if(runTime){
            const {hours , minutes} =toHoursAndMinutes(runTime);           
            return hours + "h " + minutes + "min";            
        }
        return "";
    }

    function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
      
        return { hours, minutes };
      }

    return (
        <div className="movie-banner-div">
            <img alt={movieData.title} className="movie-detail-image" src={movieData.poster_path} />
            <div className="movie-detail-div">
                <div className="movie-detail-genre-div">
                    <p className="movie-detail-title">{movieData.title}</p>    
                    <p className="movie-detail-rate">{movieData.vote_average}</p>  
                 </div>  
                
                <div className="movie-detail-genre-div">
                    {movieData.genres.map((genre : string, index : number)=> {
                        return <p key={genre} className="movie-detail-genre">{genre}{ (index===movieData.genres.length-1 ? '' : ',')}</p>
                    })}
                 </div>   
                 <div className="movie-detail-genre-div">
                    <p className="movie-detail-releaseDate">{getYear(movieData.release_date)}</p>  
                    <p className="movie-detail-releaseDate">{getDuration(movieData.runtime)}</p>  
                 </div>            
                 <p className="movie-detail-description">{movieData.overview}</p>            
            </div>       
        </div>      
    )
}

export default MovieBanner