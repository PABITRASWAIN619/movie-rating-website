import "./TrailerModal.css";

function TrailerModal({ trailerKey, onClose }) {

  if (!trailerKey) return null;

  return (
    <div className="trailer-overlay" onClick={onClose}>

      <div
        className="trailer-container"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Movie Trailer"
          allowFullScreen
        ></iframe>

      </div>

    </div>
  );
}

export default TrailerModal;