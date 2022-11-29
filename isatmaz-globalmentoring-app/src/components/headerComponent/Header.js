import React from "react";
import './Header.css';
import {BsSearch} from 'react-icons/bs';

function Header(props){
    const {isMovieBannerOpen, onSearchClick} = props;
    return  <div className="header-div">
                <p className="header-text"><b>netflix</b>roulette</p>
                {isMovieBannerOpen && <BsSearch color="#F65261" className="search-icon" onClick={onSearchClick} />}
            </div>
}

export default Header;