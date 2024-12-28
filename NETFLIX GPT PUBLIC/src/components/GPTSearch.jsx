import React from "react";
import { Main_Image } from "../utils/constants";
import GPTBar from "./GPTBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  const tmdbResults = useSelector(store => store.gpt.tmdbResults);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="fixed inset-0 -z-10">
        <img
          draggable="false"
          src={Main_Image}
          alt="main_image"
          className="w-full h-full object-cover select-none"
        />
      </div>
      <div className="flex-grow">
        <GPTBar />
        <GPTMovieSuggestion />
      </div>
      <div className={`${!tmdbResults ? "mt-52" : "mt-8"}`}>
        <Footer />
      </div>
    </div>
  );
};

export default GPTSearch;