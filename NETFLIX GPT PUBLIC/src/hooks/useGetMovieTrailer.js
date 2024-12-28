import { useEffect } from "react";
import { API_OPTIONS, TMDB_VIDEO_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieTrailer = async () => {
    const data = await fetch(
      TMDB_VIDEO_API + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const movieVideo = json.results;
    const filteredMovie = movieVideo.filter((movie) => {
      return movie.type === "Trailer";
    });
    const trailer = filteredMovie[0];
    dispatch(addTrailerVideo(trailer.key));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useGetMovieTrailer;
