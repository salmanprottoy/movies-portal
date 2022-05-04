const API_URL = "https://api.themoviedb.org/3/";

const API_KEY = "9c0fc976ad020edca10e7f271e65ad09";

const SEARCH_MOVIE = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const TRENDING_MOVIES = `${API_URL}trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`;

const TOP_RATED_MOVIES = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

const UPCOMING_MOVIES = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

export {
  SEARCH_MOVIE,
  API_URL,
  API_KEY,
  TRENDING_MOVIES,
  TOP_RATED_MOVIES,
  UPCOMING_MOVIES
};
