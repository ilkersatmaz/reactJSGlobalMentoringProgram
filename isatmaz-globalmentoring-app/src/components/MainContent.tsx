import React, {useCallback, useState} from "react";
import MovieBoard from "./movieComponents/MovieBoard";
import PageBanner from "./pageBanner/PageBanner";
import Header from "./headerComponent/Header";
import MovieBanner from "./movieBanner/MovieBanner";

function MainContent (){    
    const [selectedMovie, setSelectedMovie] = useState(undefined);
    const onMovieClick = useCallback((movie : any) => {
        setSelectedMovie(movie);
    },[]);

    const onSearchClick = useCallback(() => {
        setSelectedMovie(undefined)
    },[]);

    return (
        <div>
            <Header isMovieBannerOpen= {selectedMovie ? true : false} onSearchClick={onSearchClick}  />
            {selectedMovie ? <MovieBanner movieData={selectedMovie}/> : <PageBanner />}                
            <MovieBoard onMovieClick={onMovieClick}/> 
        </div>
    )
}

export default MainContent;