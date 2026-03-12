import { useParams } from "react-router-dom";

function MovieDetails() {

  const { id } = useParams();

  const movies = [
    {
      id: "1",
      title: "Avengers Endgame",
      genre: "Action",
      year: 2019,
      rating: 4.8,
      description: "The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
      poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
    },
    {
      id: "2",
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      rating: 4.7,
      description: "A team of explorers travel through a wormhole in space to save humanity.",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },
    {
      id: "3",
      title: "Joker",
      genre: "Drama",
      year: 2019,
      rating: 4.5,
      description: "A mentally troubled comedian begins a dark transformation into the Joker.",
      poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
    }
  ];

  const movie = movies.find((m) => m.id === id);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      <img
        src={movie.poster}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <h1>{movie.title}</h1>

      <p><strong>Genre:</strong> {movie.genre}</p>

      <p><strong>Year:</strong> {movie.year}</p>

      <p><strong>Rating:</strong> ⭐ {movie.rating}</p>

      <p style={{ maxWidth: "600px", margin: "20px auto" }}>
        {movie.description}
      </p>

      <a
        href={movie.trailer}
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

    </div>
  );
}

export default MovieDetails;