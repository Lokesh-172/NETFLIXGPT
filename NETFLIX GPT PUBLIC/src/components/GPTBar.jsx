import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_API_KEY, searchTMDBCDN } from "../utils/constants";
import { addGPTMovies, removeGPTMovies } from "../utils/gptSlice";
import ShimmerMovieList from "./ShimmerMovieList";

const GPTBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTMDB = async (movie) => {
    const data = await fetch(
      searchTMDBCDN + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    setIsLoading(true);
    dispatch(removeGPTMovies({}));
    
    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt =
        "Act as a movie recommendation system and recommend movie on topic" +
        searchText.current.value +
        "the response should contain 10 movies and should have the following syntax as the example I am going to give." +
        " Example: Sultan, Baby, 3 idioit, Phir Hera Pheri, Singham. Do not give anything besides name in the proper format";

      const result = await model.generateContent(prompt);
      const recommendations = result.response
        .text()
        .split(",")
        .map((item) => item.trim());

      const promiseArray = recommendations.map((movie) => searchTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      
      const finalResults = tmdbResults
        .map(movies => movies[0])
        .filter(movie => movie?.id != null && movie?.poster_path != null);

      dispatch(addGPTMovies({ moviesName: recommendations, tmdbResults: finalResults }));
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="pt-[35%] sm:pt-[10%] flex justify-center">
        <form
          className="flex gap-2 w-full bg-black/80 sm:w-1/2 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey].gptPlaceholder}
            className="rounded-lg p-4 m-4 w-[60%] sm:w-9/12"
          />
          <button
            className="text-white bg-red-700 py-2 px-4 rounded-lg w-3/12 sm:w-2/12 my-4"
            onClick={handleGPTSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
      {isLoading && <ShimmerMovieList title="Loading Recommendations..." />}
    </>
  );
};

export default GPTBar;