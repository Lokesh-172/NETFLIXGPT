import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  API_OPTIONS,
  Main_Image,
  poster_cdn,
  TMDB_VIDEO_API,
  YOUTUBE,
} from "../utils/constants";
import useSearch from "../hooks/useSearch";
import Header from "./Header";
import RenderStar from "../hooks/RenderStar";
import GenreButton from "./GenreButton";
import SimilarMovies from "./SimilarMovies";
import { useDispatch, useSelector } from "react-redux";
import { removeSimilarMovies } from "../utils/gptSlice";
import Footer from "./Footer";

const MoviePage = () => {
  const { movieTitle, movieID } = useParams();
  const { results } = useSearch(movieTitle);
  const [trailer, setTrailer] = useState(null);
  const individualMovie = useSelector((store) => store.movies.individualMovie);
  const similarMovies = useSelector((store) => store.gpt.similarMovies);

  const dispatch = useDispatch();

  const movieTrailer = async () => {
    const data = await fetch(
      TMDB_VIDEO_API + movieID + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filter = json.results.filter((video) => video.type === "Trailer");
    setTrailer(filter[0]?.key);
  };

  const movie = results.filter((movie) => movie.id == movieID);

  useEffect(() => {
    movieTrailer();
    dispatch(removeSimilarMovies(null));
  }, [movieID]);

  if (movie.length === 0) return null;
  const yearOfRelease = movie[0]?.release_date.split("-");

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="fixed inset-0">
        <img
          draggable="false"
          src={Main_Image}
          alt="main_image"
          className="select-none object-cover w-full h-full"
        />
      </div>
      {trailer && (
        <div className="relative pt-[56.25%]">
          <iframe
            draggable="false"
            className="absolute top-0 left-0 w-full h-full pointer-events-none select-none"
            src={`${YOUTUBE}${trailer}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=${trailer}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}

      <div
        className={`bg-black/70 w-full relative z-10 ${
          trailer ? "pt-4 sm:-mt-20" : "mt-20"
        } flex flex-col lg:flex-row p-4 lg:p-5 lg:px-16 text-white`}
      >
        {/* Movie Poster Section */}
        <div className="w-full lg:w-2/12 mb-6 lg:mb-0">
          <div className="max-w-[200px] mx-auto lg:max-w-none">
            <img
              src={poster_cdn + movie[0]?.poster_path}
              alt="poster"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center justify-content mt-4 lg:mt-10">
            <div className="border-2 border-black p-2 rounded-lg text-base lg:text-lg bg-black text-white w-full max-w-xs flex flex-col items-center">
              <div>Rating: {movie[0]?.vote_average}</div>
              <div className="text-yellow-500">
                {RenderStar(movie[0]?.vote_average)}
              </div>
              <div className="text-sm lg:text-base text-center">
                {movie[0].vote_count} Reviews till now
              </div>
            </div>
          </div>
        </div>

        {/* Movie Details Section */}
        <div className="w-full lg:w-9/12 p-2 lg:p-3 lg:px-6">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">
              {movie[0]?.title} ({yearOfRelease[0]})
            </h1>
          </div>
          <div className="mt-2 text-base lg:text-lg leading-relaxed">
            <p>{movie[0].overview}</p>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center mt-4">
            <GenreButton genre_ids={movie[0].genre_ids} />
          </div>
          <div className="mt-4">
            <SimilarMovies title={movieTitle} />
          </div>
        </div>
      </div>

      <div className="relative w-full mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default MoviePage;