import React from "react";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";
import { YOUTUBE } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const trailerKey = useSelector((store) => store.movies?.trailerVideo);
  useGetMovieTrailer(movieId);
  if(!trailerKey) return null;
  return (
    <div className="mt-[0px] sm:mt-0">
      <iframe
        draggable="false"
        className="w-screen aspect-video pointer-events-none select-none"
        src={`${YOUTUBE}${trailerKey}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=${trailerKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
