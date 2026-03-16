const API_KEY = "a262238bd06861532c4865d2cb26202a";
const BASE_URL = "https://api.themoviedb.org/3";

/* POPULAR MOVIES */
export const fetchMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results || [];
};

/* TOP RATED MOVIES */
export const fetchTopRated = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results || [];
};

/* SEARCH MOVIES */
export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results || [];
};

/* GENRE MOVIES */
export const fetchMoviesByGenre = async (genreId) => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results || [];
};

/* TRAILER */
export const fetchTrailer = async (movieId) => {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );

  const data = await res.json();

  const trailer = data.results?.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return trailer ? trailer.key : null;
};