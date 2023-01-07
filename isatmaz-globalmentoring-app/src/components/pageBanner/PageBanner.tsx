import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import UpsertMovie from "../movieComponents/upsertMovieComponent/UpsertMovie";

import "./PageBanner.css";

function PageBanner(props : any){
    const {movieData, onSearchMovieClick, searchText}=props;
    const [currentSearchText, setCurrentSearchText]=useState(searchText);
    const [isUpsertOpen, setIsUpsertOpen] = useState(false);
    return (
        <div className="search-div">
            <img alt="page-banner-background" className="search-div-image"></img>
            <div className="search-bar">
                <input
                className="search-input"
                    type="text"
                    placeholder="What do you want to watch?"
                    value={currentSearchText}
                    onChange={(e)=>{setCurrentSearchText(e.target.value)}}
                />
                <button className="search-btn" onClick={()=>{onSearchMovieClick(currentSearchText)}}>SEARCH</button>
            </div>  
            <Popup className="upsert-popup" onOpen={()=>{setIsUpsertOpen(true)}} open={isUpsertOpen} trigger={<button className="add-movie-btn"> + ADD MOVIE</button>} position="bottom left" arrow={false}>
                <UpsertMovie mode={"add"} movieData={movieData} setIsUpsertOpen={setIsUpsertOpen} />
            </Popup>

        </div>        
    )
}

export default PageBanner