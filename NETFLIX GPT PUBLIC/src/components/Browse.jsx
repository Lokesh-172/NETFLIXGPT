import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Footer from "./Footer";
import { Main_Image } from "../utils/constants";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="select-none ">
      <Header />
      <div className="fixed -z-10">
        <img
          draggable="false"
          src={Main_Image}
          alt="main_image"
          className="select-none"
        />
      </div>
      <MainContainer />
      <SecondaryContainer />
      <Footer />
    </div>
  );
};

export default Browse;
