import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";

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

  /* LOAD TRENDING */
  useEffect(() => {
    loadTrending();
  }, []);

  const loadTrending = async () => {
    try {
      setActiveGenre(null);
      const data = await fetchMovies();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  /* TOP RATED */
  const loadTopRated = async () => {
    try {
      setActiveGenre(null);
      const data = await fetchTopRated();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  /* SEARCH */
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

  /* GENRE */
  const handleGenre = async (genreId) => {

    setActiveGenre(genreId);

    const data = await fetchMoviesByGenre(genreId);
    setMovies(data);
  };

  return (

    <div>

      {/* TOP BUTTONS */}
      <div className="top-buttons">

        <button onClick={loadTrending}>Trending</button>

        <button onClick={loadTopRated}>Top Rated</button>

      </div>

      {/* GENRE */}
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

      {/* SEARCH */}
      <form onSubmit={handleSearch} className="search-bar">

        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={handleChange}
        />

        <button type="submit">Search</button>

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

      {/* HERO */}
      {movies.length > 0 && (
        <HeroBanner movie={movies[0]} />
      )}

      {/* MOVIES */}
      <h2 style={{ marginLeft: "40px", marginTop: "30px" }}>
        🔥 Movies
      </h2>

      <div className="movie-container">

        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

      </div>

      <Footer
        loadTrending={loadTrending}
        loadTopRated={loadTopRated}
        handleGenre={handleGenre}
      />

    </div>

  );
}

export default Home;