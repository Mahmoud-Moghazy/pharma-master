import React, { useState } from "react";

const StarRating = ({ totalStars, initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating) => {
    setRating(newRating);
    onChange(newRating);
  };

  const starArray = [];

  for (let i = 1; i <= totalStars; i++) {
    let starColor = "gray";
    if (i <= Math.ceil(rating)) {
      starColor = "gold";
    } else if (i === Math.ceil(rating) + 0.5) {
      starColor = "gold";
    }

    starArray.push(
      <span
        key={i}
        onClick={() => handleClick(i)}
        style={{
          color: starColor,
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        ★
      </span>
    );
  }

  return (
    <div>
      {starArray}
      <span
        style={{
          marginLeft: "30px",
          color: "gold",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        {rating} (rating)
      </span>
    </div>
  );
};

export default StarRating;
