import React from "react";
import {  useSelector } from "react-redux";
import MovieList from "./MovieList";


const GPTMovieSuggestion = () => {
  const { moviesName, tmdbResults } = useSelector((store) => store.gpt);

  if (!moviesName) return null;
  
  return (
    <div className="p-2 sm:p-4 m-4 bg-black/70 text-white">
      <MovieList title="Recommended Movies" movies={tmdbResults} />
    </div>
  );
};
export default GPTMovieSuggestion;
