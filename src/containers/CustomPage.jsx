import React from "react";
import { baseUrlForImage } from "../apis/tmdb";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./ListMovies.css";

import { useSelector } from "react-redux";

import { selectMovies } from "../features/movies/sliceMovies.js";

const CustomPage = () => {
  const [user] = useAuthState(auth);

  const movies = useSelector(selectMovies);

  return (
    <Box className="boxy">
      <Typography variant="h5">Search Movies</Typography>

      {movies.map((movie) => {
        return (
          <Card key={movie.id} className="boxy">
            <Box
              className="boxy"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 1 }}
                image={
                  movie.poster_path === null
                    ? "../../broken-1.png"
                    : `${baseUrlForImage}${movie.poster_path}`
                }
                alt={movie.title}
              ></CardMedia>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: 1,
                }}
              >
                {user ? (
                  <Link
                    to={`/detail_movie/${movie.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography component="div" variant="body1">
                      {movie.title}
                    </Typography>
                  </Link>
                ) : (
                  <Typography component="div" variant="body1">
                    {movie.title}
                  </Typography>
                )}
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default CustomPage;
