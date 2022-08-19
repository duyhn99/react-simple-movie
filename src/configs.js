export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const api_key = "7b58cfb00a04adb32cd8ad0924fd807d";
const tmdbEndPoint = "https://api.themoviedb.org/3/movie";
const tmdbEndPointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndPoint}/${type}?api_key=${api_key}&page=${page}`,
  getMovieDetails: (movieId) => `${tmdbEndPoint}/${movieId}?api_key=${api_key}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndPoint}/${movieId}/${type}?api_key=${api_key}`,
  getMovieSearch: (query, page) =>
    `${tmdbEndPointSearch}/?api_key=${api_key}&query=${query}&page=${page}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500${url}`,
};
