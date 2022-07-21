import axios from "axios";

const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

tmdbInstance.interceptors.request.use((config) => {
  config.params = {
    // add your default ones
    api_key: "fcedb118a82853890434143eb4798d73",
    // spread the request's params
    ...config.params,
  };
  return config;
});

const baseUrlForImage = "https://image.tmdb.org/t/p/w200";

const getMoviesPopular = async () => {
  try {
    const resp = await tmdbInstance.get("/movie/popular");

    return resp.data.results;
  } catch (err) {
    console.log("error getMoviePopular", err);
  }
};

const getMovieById = async (id) => {
  try {
    const resp = await tmdbInstance.get("/movie/" + id);

    return resp.data;
  } catch (err) {
    console.log("error getMovieById", err);
  }
};

const getVideosMovieById = async (id) => {
  try {
    const resp = await tmdbInstance.get("/movie/" + id + "/videos");

    /*const resultVideos = resp.data.results.filter(
      (video) =>
        video.type === "Trailer" &&
        video.site === "YouTube" &&
        video.official === true
    );*/
    const resultVideos = resp.data.results;
    return resultVideos[0];
  } catch (err) {
    console.log("error getVideosMovieById", err);
  }
};

const getSearchMovies = async (keyword) => {
  try {
    const resp = await tmdbInstance.get("/search/movie", {
      params: {
        query: keyword,
      },
    });

    return resp.data.results;
  } catch (err) {
    console.log("error getSearchMovies", err);
  }
};

export {
  tmdbInstance,
  baseUrlForImage,
  getMoviesPopular,
  getMovieById,
  getVideosMovieById,
  getSearchMovies,
};
