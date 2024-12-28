import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_API } from "../utils/constants";
import { addtopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addtopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
