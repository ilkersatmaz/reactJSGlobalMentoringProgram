import React from "react";
import './Header.css';
import {BsSearch} from 'react-icons/bs';

function Header(props){
    const {isMovieBannerOpen} = props;
    return  <div className="header-div">
                <p className="header-text"><b>netflix</b>roulette</p>
                {isMovieBannerOpen && <BsSearch color="#F65261" className="search-icon" />}
            </div>
}

export default Header;