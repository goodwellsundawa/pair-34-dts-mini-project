import { getSearchMovies } from "../../apis/tmdb";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialMovies = { movies: [] };

export const searchMoviesAsync = createAsyncThunk(
  "searchMovies/fetchSearchMovies",
  async (par) => {
    const response = await getSearchMovies(par);
    return response;
  }
);

const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState: initialMovies,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMoviesAsync.pending, () => {
        console.log("searchMoviesAsync is loading ...");
      })
      .addCase(searchMoviesAsync.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(searchMoviesAsync.rejected, () => {
        console.log("searchMoviesAsync is fail to get data");
      });
  },
});

export const selectMovies = (state) => state.rdcSliceMovies.movies;

export default searchMoviesSlice.reducer;
