import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
      
      <div className="movie-card">
        <img src={movie.poster} alt={movie.title} />

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
          <p>{movie.year}</p>
          <p>⭐ {movie.rating}</p>

          <RatingStars />
        </div>
      </div>

    </Link>
  );
}

export default MovieCard;