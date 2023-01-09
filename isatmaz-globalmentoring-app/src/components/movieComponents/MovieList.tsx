import React, { useEffect, useState } from "react";
import Select from 'react-select'
import MovieCard from "./MovieCard";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchMovies, MovieType } from '../../store/movies/moviesSlice';
import { useSearchParams } from "react-router-dom";

const sortByOptions = [
    { value: 'release_date', label: 'Release Date'}, 
    { value: 'vote_average', label: 'Average Vote' }
  ]

function MovieList(props:any){   
    const {onMovieClick, genre, setSelectedGenre} = props;
    const isLoading = useAppSelector((state) => state.movies.isLoading);
    const movies = useAppSelector((state) => state.movies.responseData?.data) as MovieType[];
    const [sortBy, setSortBy] = useState("release_date");
    const dispatch = useAppDispatch();
    const [searchParams,setSearchParams]=useSearchParams();
    useEffect(()=>{
        const currentParams = Object.fromEntries([...searchParams]);
        if (!currentParams["genre"] || currentParams["genre"].toLowerCase() === 'all') {
            dispatch(fetchMovies({search: currentParams["title"]?? "", sortBy: currentParams["sortBy"]}));
        } else {
            dispatch(fetchMovies({search: currentParams["title"]?? "", filter: currentParams["genre"], sortBy: currentParams["sortBy"] }));
        }
        if(sortBy !== currentParams["sortBy"]){
            setSortBy(currentParams["sortBy"])
        }
        if(genre.toLowerCase()==="all" && currentParams["genre"]){
            setSelectedGenre(currentParams["genre"].toLocaleUpperCase());
        }          
    },[dispatch,searchParams])  
    useEffect(() => {
      const currentParams = Object.fromEntries([...searchParams]);      
      if(!(!genre || genre.toLowerCase() === 'all')){        
        currentParams["genre"]=genre;
      }
      else{
        delete currentParams.genre;
      }  
      currentParams["sortBy"]=sortBy;
      setSearchParams(currentParams);       
    }, [genre, sortBy]);   
    return (
        <div className="movie-list-div">
            {isLoading ? (
                <p>Loading movies</p>
            ) : (<>            
            <p className="movie-list-title"><b>{movies?.length}</b> movies found</p>
            <div className="movie-card-list-div"> 
                {movies?.map((movie:MovieType)=> {
                    return <MovieCard key={movie.title} onMovieClick={onMovieClick} movieData={movie}/>
                })}                        
            </div>
            </>)}
            <div className="movie-board-sort-by-option" >
                <p className="sort-by-label">SORT BY</p>
                <Select  defaultValue={{value: 'release_date', label: 'Release Date'}} options={sortByOptions} onChange={(e)=> {setSortBy(e?.value ? e.value : "release_date")}}/>
            </div>   
        </div>      
    )        
}

export default MovieList;