import React, {useCallback, useEffect, useState} from "react";
import MovieBoard from "./movieComponents/MovieBoard";
import PageBanner from "./pageBanner/PageBanner";
import Header from "./headerComponent/Header";
import MovieBanner from "./movieBanner/MovieBanner";
import { useSearchParams } from "react-router-dom";

function MainContent (){   
    const [searchParams,setSearchParams]=useSearchParams();
    const [selectedMovie, setSelectedMovie] = useState(undefined);
    const [searchText, setSearchText]=useState("");
    const onMovieClick = useCallback((movie : any) => {
        setSelectedMovie(movie);
    },[]);

    const onSearchClick = useCallback(() => {
        setSelectedMovie(undefined)
    },[]);

    const onSearchMovieClick = useCallback((value) => {
       setSearchText(value);
    },[]);
    useEffect(()=>{
        const currentParams = Object.fromEntries([...searchParams]);
        if(currentParams["title"] !== searchText && searchText!==""){
            currentParams["title"]=searchText;
            setSearchParams(currentParams);
        }
    },[searchText])
    useEffect(()=>{
        const currentParams = Object.fromEntries([...searchParams]);
        if(currentParams["title"]!== searchText){
            setSearchText(currentParams["title"]);
        }
    },[searchParams])

    return (
        <div>
            <Header isMovieBannerOpen= {selectedMovie ? true : false} onSearchClick={onSearchClick}  />
            {selectedMovie ? <MovieBanner movieData={selectedMovie}/> : <PageBanner searchText={searchText} onSearchMovieClick={onSearchMovieClick}/>}                
            <MovieBoard onMovieClick={onMovieClick} searchText={searchText} setSearchText={setSearchText}/> 
        </div>
    )
}

export default MainContent;