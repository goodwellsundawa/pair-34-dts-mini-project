import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../features/movies/sliceMovies.js";

export const store = configureStore({
  reducer: {
    rdcSliceMovies: moviesSlice,
  },
});
