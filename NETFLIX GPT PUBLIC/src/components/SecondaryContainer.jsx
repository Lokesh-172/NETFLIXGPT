import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="w-full bg-black/80 sm:ml-0 sm:mt-0 -z-50">
      <div className="sm:py-12 sm:pt-0 pt-12 -ml-8 sm:ml-0 sm:pl-0 sm:-mt-[17rem] z-100  sm:px-0">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
