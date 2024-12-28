import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_API } from "../utils/constants";
import { addpopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addpopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
