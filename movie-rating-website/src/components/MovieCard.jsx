import { useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import TrailerModal from "./TrailerModal";
import { fetchTrailer } from "../tmdb";

function MovieCard({ movie }) {

  const [trailerKey, setTrailerKey] = useState(null);

  const openTrailer = async (e) => {

    e.preventDefault();   // stop Link navigation
    e.stopPropagation();

    const key = await fetchTrailer(movie.id);
    setTrailerKey(key);
  };

  return (

    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >

      <div className="movie-card">

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="movie-info">

          <h3>{movie.title}</h3>

          <p>⭐ {movie.vote_average}</p>

          <RatingStars movieId={movie.id} />

          <button
            className="trailer-btn"
            onClick={openTrailer}
          >
            ▶ Watch Trailer
          </button>

        </div>

      </div>

      <TrailerModal
        trailerKey={trailerKey}
        close={() => setTrailerKey(null)}
      />

    </Link>
  );
}

export default MovieCard;