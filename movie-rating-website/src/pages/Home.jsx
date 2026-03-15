import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import HeroBanner from "../components/HeroBanner";

import {
  fetchMovies,
  fetchTopRated,
  searchMovies,
  fetchMoviesByGenre
} from "../tmdb";

import "./Home.css";

function Home() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeGenre, setActiveGenre] = useState(null);

  /* LOAD TRENDING MOVIES */
  useEffect(() => {
    loadTrending();
  }, []);

  const loadTrending = async () => {
    setActiveGenre(null);
    const data = await fetchMovies();
    setMovies(data);
  };

  /* LOAD TOP RATED */
  const loadTopRated = async () => {
    setActiveGenre(null);
    const data = await fetchTopRated();
    setMovies(data);
  };

  /* SEARCH MOVIE */
  const handleSearch = async (e) => {

    e.preventDefault();

    if (search.trim() === "") {
      loadTrending();
      return;
    }

    const data = await searchMovies(search);
    setMovies(data);
    setSuggestions([]);
  };

  /* LIVE SEARCH */
  const handleChange = async (e) => {

    const value = e.target.value;
    setSearch(value);

    if (value.length > 2) {
      const data = await searchMovies(value);
      setSuggestions(data.slice(0,5));
    } else {
      setSuggestions([]);
    }
  };

  /* GENRE FILTER */
  const handleGenre = async (genreId) => {

    setActiveGenre(genreId);

    const data = await fetchMoviesByGenre(genreId);
    setMovies(data);

  };

  return (

    <div>

      {/* TOP BUTTONS */}
      <div className="top-buttons">

        <button onClick={loadTrending}>
          Trending
        </button>

        <button onClick={loadTopRated}>
          Top Rated
        </button>

      </div>


      {/* GENRE BUTTONS */}
      <div className="genre-buttons">

        <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => handleGenre(28)}>
        Action
        </button>

        <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => handleGenre(35)}>
        Comedy
        </button>

        <button
        className={activeGenre === 27 ? "active" : ""}
        onClick={() => handleGenre(27)}>
        Horror
        </button>

        <button
        className={activeGenre === 16 ? "active" : ""}
        onClick={() => handleGenre(16)}>
        Animated
        </button>

        <button
        className={activeGenre === 878 ? "active" : ""}
        onClick={() => handleGenre(878)}>
        Sci-Fi
        </button>

      </div>


      {/* SEARCH BAR */}
      <form onSubmit={handleSearch} className="search-bar">

        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={handleChange}
        />

        <button type="submit">
          Search
        </button>

        {/* SEARCH SUGGESTIONS */}
        {suggestions.length > 0 && (

          <div className="suggestion-box">

            {suggestions.map((movie) => (

              <div
                key={movie.id}
                className="suggestion-item"
                onClick={() => {
                  setSearch(movie.title);
                  setSuggestions([]);
                }}
              >
                {movie.title}
              </div>

            ))}

          </div>

        )}

      </form>


      {/* HERO BANNER */}
      {movies.length > 0 && (
        <HeroBanner movie={movies[0]} />
      )}


      {/* TITLE */}
      <h2 style={{ marginLeft: "40px", marginTop: "30px" }}>
        🔥 Movies
      </h2>


      {/* MOVIE GRID */}
      <div className="movie-container">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </div>

  );
}

export default Home;