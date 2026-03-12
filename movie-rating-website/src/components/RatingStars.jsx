import { useState } from "react";

function RatingStars() {

  const [rating, setRating] = useState(0);

  return (
    <div>
      {[1,2,3,4,5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            color: star <= rating ? "gold" : "gray"
          }}
        >
          ★
        </span>
      ))}

      <p>Your Rating: {rating}</p>
    </div>
  );
}

export default RatingStars;