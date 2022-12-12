import React, { useState } from "react";
import './Movie.css'
import Popup from 'reactjs-popup';
import { BsThreeDotsVertical } from 'react-icons/bs';
import UpsertMovie from "./upsertMovieComponent/UpsertMovie";
import DeleteMovie from "./deleteMovieComponent/DeleteMovie";
import ConfirmationPopup from "./confirmationComponent/ConfirmationPopup";

function MovieCard(props:any){
    const {movieData, onMovieClick} = props;
    const [isMoreOpen, setIsMoreOpen]=useState(false);
    const [isUpsertOpen, setIsUpsertOpen]=useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen]=useState(false);
    function getYear(releaseDate:string){
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
                        <UpsertMovie mode={"edit"} movieData={movieData} setIsUpsertOpen={setIsUpsertOpen} setIsConfirmationOpen={setIsConfirmationOpen} />
                    </Popup>   
                    <Popup className="upsert-popup" trigger={ <button className="movie-card-edit-button"> <p className="more-option-text">Delete</p></button>} position="bottom left" arrow={false}>
                        <DeleteMovie movieId={movieData.id} setIsConfirmationOpen={setIsConfirmationOpen}/>
                    </Popup>                           
                </div>
            </div>
            <Popup className="confirmation-popup" onClose={()=>{setIsConfirmationOpen(false)}} position="bottom left" open={isConfirmationOpen} arrow={false}>
                <ConfirmationPopup setIsConfirmationOpen={setIsConfirmationOpen}/>
            </Popup>  
            <img className="movie-card-image" alt={movieData.title} src={movieData.poster_path} />
            <div className="movie-card-title-div">
                <p className="movie-card-title">{movieData.title}</p>                
                <p className="movie-card-releaseDate">{getYear(movieData.release_date)}</p>                
            </div>            
            <div className="movie-card-genre-div">
                {movieData.genres.map((genre: string, index: number)=> {
                    return <p key={genre} className="movie-card-genre">{genre}{ (index===movieData.genres.length-1 ? '' : ',')}</p>
                })}
            </div>   
        </div>        
    )
}

export default MovieCard;