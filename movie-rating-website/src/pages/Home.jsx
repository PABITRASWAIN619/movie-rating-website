import { useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

function Home() {

  const movies = [
    {
      id: 1,
      title: "Avengers Endgame",
      genre: "Action",
      year: 2019,
      rating: 4.8,
      poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      rating: 4.7,
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      id: 3,
      title: "Joker",
      genre: "Drama",
      year: 2019,
      rating: 4.5,
      poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    }
  ];

  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <Navbar />

      <h1 style={{ textAlign: "center" }}>Movie Rating Website</h1>

      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "5px"
          }}
        />
      </div>

      <div className="movie-container">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
}

export default Home;