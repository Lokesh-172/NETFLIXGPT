import { useEffect, useState } from "react";
import { API_OPTIONS, searchTMDBCDN } from "../utils/constants";

const useSearch = (movie) => {
  const [results, setResults] = useState([]);

  const searchTMDB = async (movie) => {
    const data = await fetch(
      searchTMDBCDN + movie + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setResults(json.results || []);
  };

  useEffect(() => {
    searchTMDB(movie);
  }, [movie]);

  return { results };
};

export default useSearch;
