import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import UpsertMovie from "../movieComponents/upsertMovieComponent/UpsertMovie";

import "./PageBanner.css";

function PageBanner(props){
    const {movieData}=props;
    return (
        <div className="search-div">
            <img alt="page-banner-background" className="search-div-image"></img>
            <div className="search-bar">
                <input
                className="search-input"
                    type="text"
                    placeholder="What do you want to watch?"
                />
                <button className="search-btn">SEARCH</button>
            </div>  
            <Popup className="upsert-popup" trigger={<button className="add-movie-btn"> + ADD MOVIE</button>} position="bottom left" arrow={false}>
                <UpsertMovie movieData={movieData} />
            </Popup>
            
        </div>        
    )
}

export default PageBanner