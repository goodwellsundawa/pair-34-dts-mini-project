import axios from "axios";

const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "fcedb118a82853890434143eb4798d73",
  },
});

const baseUrlForImage = "https://image.tmdb.org/t/p/w200";

export { tmdbInstance, baseUrlForImage };
