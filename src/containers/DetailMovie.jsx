import React, { useEffect, useState } from "react";
import { tmdbInstance, baseUrlForImage } from "../apis/tmdb";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";

import "./ListMovies.css";

const DetailMovie = () => {
  const [movie, setMovie] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdbInstance.get(
          "/movie/" + params.idMovie
        );

        setMovie(responseDariTMDB.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, [params.idMovie]);

  return (
    <Card className="boxy">
      <Box>
        <Typography variant="h6">Detail Movie</Typography>
      </Box>
      <Box
        className="boxy"
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
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
          <Typography component="div" variant="body1">
            {movie.title}
          </Typography>
          <Rating value={movie.vote_average / 2} precision={0.1} readOnly />
          <Typography variant="body2">
            Release date: {movie.release_date}
          </Typography>
          <Typography variant="body2">{movie.overview}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default DetailMovie;
