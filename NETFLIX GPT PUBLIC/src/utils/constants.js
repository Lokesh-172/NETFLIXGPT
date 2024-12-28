export const Main_Image =
  "https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg";

export const Logo =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const User_Icon =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer" +import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const poster_cdn = "https://image.tmdb.org/t/p/original";

export const YOUTUBE = "https://www.youtube.com/embed/";

export const TMDB_VIDEO_API = "https://api.themoviedb.org/3/movie/";

export const POPULAR_API = "https://api.themoviedb.org/3/movie/popular?page=1";
export const TOP_RATED_API =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";
export const UPCOMING_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const SUPPORTED_LANGUAGE = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
];

export const searchTMDBCDN = "https://api.themoviedb.org/3/search/movie?query=";

export const genres = {
  28: { genre: "Action" },
  12: { genre: "Adventure" },
  16: { genre: "Animation" },
  35: { genre: "Comedy" },
  80: { genre: "Crime" },
  99: { genre: "Documentary" },
  18: { genre: "Drama" },
  10751: { genre: "Family" },
  14: { genre: "Fantasy" },
  36: { genre: "History" },
  27: { genre: "Horror" },
  10402: { genre: "Music" },
  9648: { genre: "Mystery" },
  10749: { genre: "Romance" },
  878: { genre: "Science Fiction" },
  10770: { genre: "TV Movie" },
  53: { genre: "Thriller" },
  10752: { genre: "War" },
  37: { genre: "Western" },
};

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
