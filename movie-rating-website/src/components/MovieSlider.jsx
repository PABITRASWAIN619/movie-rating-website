import MovieCard from "./MovieCard";
import "./MovieSlider.css";

function MovieSlider({ movies }) {

  return (

    <div className="slider-container">

      <div className="slider">

        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

      </div>

    </div>

  );
}

export default MovieSlider;