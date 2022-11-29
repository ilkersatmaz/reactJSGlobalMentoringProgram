import { useState, useEffect } from "react";
import {movies} from "../movieData";

const useFetchMovie = (genre) => {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    setMovieList(genre === "All" ? movies : movies.filter(movie => movie.genre.indexOf(genre) > -1));
  }, [genre]);

  return [movieList];
};

export default useFetchMovie;