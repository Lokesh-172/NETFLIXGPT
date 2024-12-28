import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import ShimmerVideoTitle from "./ShimmerVideoTitle";
import ShimmerVideoBackground from "./ShimmerVideoBackground";
import { Main_Image } from "../utils/constants";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const isLoading = !movies || movies.length === 0;

  if (isLoading) {
    return (
      <div className="overflow-x-hidden">
        <ShimmerVideoTitle />
        <ShimmerVideoBackground />
      </div>
    );
  }
  const mainMovie = movies[0];
  const { original_title, overview, poster_path, id } = mainMovie;
  return (
    <div className="overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <img
          draggable="false"
          src={Main_Image}
          alt="main_image"
          className="w-full h-full object-cover select-none"
        />
      </div>
      <VideoTitle
        title={original_title}
        overview={overview}
        poster_path={poster_path}
        id={id}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
