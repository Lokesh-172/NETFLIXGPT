import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    individualMovie: 0,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addpopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addtopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    toggleIndividualMovie: (state, action) => {
      state.individualMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addpopularMovies,
  addtopRatedMovies,
  addupcomingMovies,
  toggleIndividualMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
