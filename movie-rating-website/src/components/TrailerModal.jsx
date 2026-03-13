function TrailerModal({ trailerKey, close }) {

  if (!trailerKey) return null;

  return (
    <div className="trailer-overlay">

      <div className="trailer-container">

        <button className="close-btn" onClick={close}>
          ✖
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Movie Trailer"
          allowFullScreen
        ></iframe>

      </div>

    </div>
  );
}

export default TrailerModal;