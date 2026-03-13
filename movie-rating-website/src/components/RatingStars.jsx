import { useState, useEffect } from "react";

function RatingStars({ movieId }) {

  const [rating,setRating] = useState(0);

  useEffect(()=>{

    const saved = localStorage.getItem("rating_"+movieId);

    if(saved){
      setRating(Number(saved));
    }

  },[movieId]);

  const handleRating=(value)=>{

    setRating(value);

    localStorage.setItem("rating_"+movieId,value);

  };

  return (

    <div>

      {[1,2,3,4,5].map((star)=>(
        <span
          key={star}
          onClick={()=>handleRating(star)}
          style={{
            cursor:"pointer",
            color: star<=rating ? "gold" : "gray",
            fontSize:"18px"
          }}
        >
          ★
        </span>
      ))}

    </div>

  );
}

export default RatingStars;