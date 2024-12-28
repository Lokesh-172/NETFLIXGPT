import React, { useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch, useSelector } from "react-redux";
import { addSimilarMovies } from "../utils/gptSlice";
import MovieList from "./MovieList";
import { API_OPTIONS, GEMINI_API_KEY, searchTMDBCDN } from "../utils/constants";
import ShimmerMovieList from "./ShimmerMovieList";

const SimilarMovies = ({ title }) => {
  const dispatch = useDispatch();
  const similarMovies = useSelector((store) => store.gpt.similarMovies);
  const individualMovie = useSelector((store) => store.movies.individualMovie);

  const searchTMDB = async (movie) => {
    const data = await fetch(
      searchTMDBCDN + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const similarMovieGPT = async (title) => {
    const genAI = new GoogleGenerativeAI(
      GEMINI_API_KEY
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
      "Acts as a movie recommendation system and recommend movie similar to" +
      title +
      "the response should contain 10 movies and should have the following syntax as the example I am going to give." +
      " Example: Sultan, Baby, 3 idioit, Phir Hera Pheri, Singham. Do not give anything besides name in the proper format";

    const result = await model.generateContent(prompt);
    const recommendations = result.response
      .text()
      .split(", ")
      .map((item) => item.trim());

    const promiseArray = recommendations.map((movie) => {
      return searchTMDB(movie);
    });
    const tmdbResult = await Promise.all(promiseArray);

    const finalFilter = tmdbResult
      .map((movie) => movie[0]) // Extract the first movie from each TMDB result
      .filter((movie) => movie?.id != null); // Filter out movies with null or undefined `id`

    dispatch(addSimilarMovies(finalFilter));
  };
  useEffect(() => {
    similarMovieGPT(title);
  }, []);

  if (!similarMovies) return <ShimmerMovieList title={"Similar Movies"} />;

  return (
    <div className="text-white z-10 -ml-10 sm:-ml-20">
      <MovieList title={"Similar Movies"} movies={similarMovies} />
    </div>
  );
};

export default SimilarMovies;
