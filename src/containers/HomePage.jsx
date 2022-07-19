import React, { useEffect, useState } from "react";
import { tmdbInstance, baseUrlForImage } from "../apis/tmdb";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import "./ListMovies.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdbInstance.get("/movie/popular");

        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <Box className="boxy">
      <Typography variant="h5">Top 5 Movie Popular</Typography>

      {movies.slice(0, 5).map((movie) => {
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
                image={`${baseUrlForImage}${movie.poster_path}`}
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

export default HomePage;
