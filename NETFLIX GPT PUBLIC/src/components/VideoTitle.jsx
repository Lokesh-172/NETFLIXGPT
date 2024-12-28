import React, { useState } from "react";
import { poster_cdn } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoTitle = ({ overview, title, poster_path, id }) => {
  const [movieDescription, setMovieDescription] = useState(false);
  const [translateImage, setTranslateImage] = useState(false);

  const handleClickMovieIcon = () => {
    if (window.innerWidth >= 1024) {
      setTranslateImage(!translateImage);
      setMovieDescription(!movieDescription);
    }
  };

  return (
    <div className="absolute w-full aspect-video mt-5 sm:mt-0 px-4 sm:px-20 sm:py-[15rem] text-white overflow-hidden">
      <div>
        <img
          src={poster_cdn + poster_path}
          draggable="false"
          alt="Movie Poster"
          className={`
            w-20 ${translateImage ? "sm:w-40" : "sm:w-36"}
            mt-20 sm:mt-14 cursor-pointer select-none rounded-md
            sm:transition-transform sm:duration-500 sm:ease-in-out
            ${translateImage ? "sm:-translate-y-40" : ""}
          `}
          onClick={handleClickMovieIcon}
        />
      </div>
      {movieDescription && (
        <div className="sm:absolute sm:top-[23rem] sm:w-3/12">
          <h1 className="my-3 text-3xl font-bold">{title}</h1>
          <h3 className="my-2 line-clamp-4">{overview}</h3>
        </div>
      )}
      <div className="flex gap-2 absolute z-50 -mt-14 ml-24 sm:mt-0 sm:ml-0">
        <button className="rounded-lg text-sm px-2 py-1 mt-4 sm:px-5 sm:py-2 sm:text-2xl bg-white text-black hover:bg-gray-300 transition-colors duration-500 ease-in-out">
          <i className="ri-play-fill"></i> Play
        </button>
        <Link to={`/browse/${title}/${id}`}>
          <button className="rounded-lg text-sm mt-4 px-9 py-2 sm:text-2xl bg-black/70 text-white">
            <i className="ri-information-line"></i> More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;