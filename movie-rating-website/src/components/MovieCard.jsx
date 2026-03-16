import { useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import TrailerModal from "./TrailerModal";
import { fetchTrailer } from "../tmdb";

function MovieCard({ movie }) {
  const [trailerKey, setTrailerKey] = useState(null);

  const openTrailer = async (e) => {
    e.preventDefault(); // prevent button from navigating
    e.stopPropagation(); // prevent parent Link from triggering

    const key = await fetchTrailer(movie.id);
    setTrailerKey(key);
  };

  return (
    <div className="movie-card-wrapper">
      {/* Keep the card clickable for navigation */}
      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="movie-card">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
          />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
            <RatingStars movieId={movie.id} />
          </div>
        </div>
      </Link>

      {/* Trailer button outside the Link */}
      <button className="trailer-btn" onClick={openTrailer}>
        ▶ Watch Trailer
      </button>

      <TrailerModal trailerKey={trailerKey} close={() => setTrailerKey(null)} />
    </div>
  );
}

export default MovieCard;