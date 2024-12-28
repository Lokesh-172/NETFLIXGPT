import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptBox: false,
    moviesName: null,
    tmdbResults: null,
    similarMovies: null,
  },
  reducers: {
    togglegptBox: (state, action) => {
      state.gptBox = action.payload;
    },
    addGPTMovies: (state, action) => {
      const { moviesName, tmdbResults } = action.payload;
      state.moviesName = moviesName;
      state.tmdbResults = tmdbResults;
    },
    removeGPTMovies: (state, action) => {
      const { moviesName, tmdbResults } = action.payload;
      state.moviesName = null;
      state.tmdbResults = null;
    },
    addSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
    removeSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
  },
});

export const {
  togglegptBox,
  addGPTMovies,
  removeGPTMovies,
  addSimilarMovies,
  removeSimilarMovies,
  } = gptSlice.actions;

export default gptSlice.reducer;
