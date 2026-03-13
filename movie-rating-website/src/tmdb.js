const API_KEY = "a262238bd06861532c4865d2cb26202a";

export const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );

  const data = await response.json();
  return data.results;
};
export const fetchMoviesByGenre = async (genreId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=a262238bd06861532c4865d2cb26202a&with_genres=${genreId}`
  );

  const data = await response.json();
  return data.results;
};
export const fetchTrailer = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=YOUR_API_KEY`
  );

  const data = await res.json();

  const trailer = data.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return trailer ? trailer.key : null;
};