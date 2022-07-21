import React, { useEffect, useState } from "react";
import {
  baseUrlForImage,
  getMovieById,
  getVideosMovieById,
} from "../apis/tmdb";
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
  const [videos, setVideos] = useState([]);

  const params = useParams();
  const idMovie = params.idMovie;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const dataMovie = await getMovieById(idMovie);

        setMovie(dataMovie);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchVideos = async () => {
      try {
        const dataVideos = await getVideosMovieById(idMovie);
        setVideos(dataVideos);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
    fetchVideos();
  }, [idMovie]);

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
          <Typography component="div" variant="body1">
            {movie.title}
          </Typography>
          <Rating value={movie.vote_average / 2} precision={0.1} readOnly />
          <Typography variant="body2">
            Release date: {movie.release_date}
          </Typography>
          <Typography variant="body2">{movie.overview}</Typography>
          {videos !== undefined ? (
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "0.5em",
              }}
            >
              <div>
                <iframe
                  src={"https://www.youtube.com/embed/" + videos.key}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen="0"
                  title={videos.name}
                  width="400"
                  height="200"
                />
              </div>
            </Box>
          ) : (
            ""
          )}
        </CardContent>
      </Box>
    </Card>
  );
};

export default DetailMovie;
