import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_API } from "../utils/constants";
import { addupcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addupcomingMovies(json.results));
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
