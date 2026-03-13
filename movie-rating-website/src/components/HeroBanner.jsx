function HeroBanner({ movie }) {
  if (!movie) return null;

  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        height: "450px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-end",
        padding: "40px",
        color: "white"
      }}
    >
      <div>
        <h1>{movie.title}</h1>
        <p style={{ maxWidth: "600px" }}>{movie.overview}</p>
        <p>⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default HeroBanner;