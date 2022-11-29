import React, { useState } from "react";
import './Movie.css'
import Popup from 'reactjs-popup';
import { BsThreeDotsVertical } from 'react-icons/bs';
import UpsertMovie from "../movieComponents/upsertMovieComponent/UpsertMovie";
import DeleteMovie from "./deleteMovieComponent/DeleteMovie";

function MovieCard(props){
    const {movieData, onMovieClick} = props;
    const [isMoreOpen, setIsMoreOpen]=useState(false);
    const [isUpsertOpen, setIsUpsertOpen]=useState(false);
    function getYear(releaseDate){
        if(releaseDate){
            const date=new Date(releaseDate)
            return date.getFullYear();
        }
        return "";
    }
    return (
        <div className="movie-card-div" onClick={()=>{onMovieClick(movieData)}}>
            <button className="movie-card-more-button" onClick={()=>{setIsMoreOpen(!isMoreOpen)}}><BsThreeDotsVertical color="#FFFFFF" className="movie-card-more-icon"/></button>
            <div className={isMoreOpen ? `more-option-div` : `more-option-div-hide`} >
                <div>
                    <Popup className="upsert-popup" onOpen={()=>{setIsUpsertOpen(true); setIsMoreOpen(false)}} open={isUpsertOpen} trigger={<button className="movie-card-edit-button"> <p className="more-option-text">Edit</p> </button>} position="bottom left" arrow={false}>
                        <UpsertMovie movieData={movieData} setIsUpsertOpen={setIsUpsertOpen} />
                    </Popup>   
                    <Popup className="upsert-popup" trigger={ <button className="movie-card-edit-button"> <p className="more-option-text">Delete</p></button>} position="bottom left" arrow={false}>
                        <DeleteMovie movieData={movieData} />
                    </Popup> 
                </div>
            </div>

            <img className="movie-card-image" alt={movieData.title} src={movieData.imageUrl} />
            <div className="movie-card-title-div">
                <p className="movie-card-title">{movieData.title}</p>                
                <p className="movie-card-releaseDate">{getYear(movieData.releaseDate)}</p>                
            </div>            
            <div className="movie-card-genre-div">
                {movieData.genre.map((genre, index)=> {
                    return <p key={genre} className="movie-card-genre">{genre}{ (index===movieData.genre.length-1 ? '' : ',')}</p>
                })}
            </div>   
        </div>        
    )
}

export default MovieCard;