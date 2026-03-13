import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {

    const fetchMovie = async () => {

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a262238bd06861532c4865d2cb26202a`
      );

      const data = await response.json();
      setMovie(data);

    };

    const fetchTrailer = async () => {

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a262238bd06861532c4865d2cb26202a`
      );

      const data = await response.json();

      const trailerVideo = data.results.find(
        (video) => video.type === "Trailer"
      );

      if (trailerVideo) {
        setTrailer(`https://www.youtube.com/watch?v=${trailerVideo.key}`);
      }

    };

    fetchMovie();
    fetchTrailer();

  }, [id]);

  if (!movie) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <h1>{movie.title}</h1>

      <p><strong>Release Date:</strong> {movie.release_date}</p>

      <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>

      <p style={{ maxWidth: "700px", margin: "20px auto" }}>
        {movie.overview}
      </p>

      {trailer && (
        <a
          href={trailer}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            background: "red",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none"
          }}
        >
          ▶ Watch Trailer
        </a>
      )}

    </div>
  );
}

export default MovieDetails;